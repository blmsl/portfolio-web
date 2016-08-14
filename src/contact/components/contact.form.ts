'use strict';
import {Component, OnInit} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ContactService} from '../services/contact';
import {ErrorConfig} from '../definitions/error.config';
import {ContactMessage} from '../definitions/contact.message';
import {WrappedError} from '../../shared/definitions/wrapped.error';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
  transform(value:string):string {
    return value.trim();
  }
}
@Component({
  selector: 'contact-form',
  providers: [FormBuilder, ContactService],
  pipes: [TrimPipe],
  templateUrl: './contact/components/contact.form.html',
  styleUrls: ['./contact/components/contact.form.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ContactFormComponent implements OnInit {
  public name:FormControl;
  public email:FormControl;
  public message:FormControl;
  public heuning:FormControl;
  public form:FormGroup;
  public submitClicked:boolean;
  public submitting:boolean;
  public sentSuccessfully:boolean;
  public submitBtnText:string;
  public serverErrors:string;
  public errorConfig:ErrorConfig;
  private _contactService:ContactService;

  constructor(contactService:ContactService, fb:FormBuilder) {
    this._contactService = contactService;
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.message = new FormControl('', Validators.required);
    this.heuning = new FormControl('');
    this.form = fb.group({
      name: this.name,
      email: this.email,
      message: this.message,
      heuning: this.heuning
    });
    this.submitClicked = false;
    this.submitting = false;
    this.sentSuccessfully = false;
    this.submitBtnText = 'Send message';
  }

  ngOnInit() {
    this.getErrorConfig();
  }

  getErrorConfig() {
    this._contactService.getErrorConfig().subscribe(
      res => this.errorConfig = (<ErrorConfig>res).errorConfig,
      err => console.warn('errorConfig not returned')
    );
  }

  onClick() {
    this.submitClicked = true;
  }

  onSubmit() {
    this.toggleSubmitting();
    this.serverErrors = '';

    let submission:ContactMessage = new ContactMessage(
      this.name.value.trim(),
      this.email.value.trim(),
      this.message.value.trim(),
      this.heuning.value
    );

    this._contactService.send(submission).subscribe(
      resp => this.handleSuccess(),
      err => this.handleErrors(err)
    );
  }

  handleSuccess() {
    this.toggleSubmitting();
    this.sentSuccessfully = true;
  }

  handleErrors(err:WrappedError) {
    this.toggleSubmitting();
    switch (err.status) {
      case 400:
        _.each(err.content.errors, (error:string) => {
          this.appendError(this.errorConfig[error].message);
        });
        break;
      case 500:
      default:
        this.appendError(this.errorConfig['e_generic'].message);
        break;
    }
  }

  appendError(error:String) {
    if (this.serverErrors) {
      this.serverErrors += '<br>';
    }
    this.serverErrors += error;
  }

  toggleSubmitting() {
    this.submitting = !this.submitting;
    this.submitBtnText = this.submitting ? 'Sending...' : 'Send message';
  }
}

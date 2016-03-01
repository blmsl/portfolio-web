'use strict';
import {Component, View, OnInit}          from 'angular2/core';
import {Pipe, PipeTransform}              from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Response}   from 'angular2/http';
import {ContactService}                   from '../../shared/services/contact.service';
import {ContactMessage}                   from '../../shared/models/contact/definitions/contact.message';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
  transform(value:string):string {
    return value.trim();
  }
}
@Component({
  selector: 'contact-form',
  providers: [Http, HTTP_PROVIDERS, ContactService]
})
@View({
  pipes: [TrimPipe],
  templateUrl: './contact/components/contact.form.html',
  styleUrls: ['./contact/components/contact.form.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ContactFormComponent implements OnInit {
  public message:ContactMessage;
  public submitClicked:boolean;
  public submitting:boolean;
  public sentSuccessfully:boolean;
  public submitBtnText:string;
  public serverErrors:string;
  public errorConfig:JSON;
  private _contactService:ContactService;

  constructor(contactService:ContactService) {
    this._contactService = contactService;
    this.message = new ContactMessage();
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
      (res:Response) =>
        this.errorConfig = (res.json()).errorMessages,
      (err:Response) =>
        console.log(err.json)
    );
  }

  onClick() {
    this.submitClicked = true;
  }

  onSubmit() {
    this.toggleSubmitting();
    this.serverErrors = '';

    let submission = new ContactMessage(
      this.message.name.trim(),
      this.message.email.trim(),
      this.message.text.trim(),
      this.message.heuning
    );

    this._contactService.send(submission).subscribe(
      () =>
        this.handleSuccess(),
      (err:Response) =>
        this.handleErrors(err)
    );
  }

  handleSuccess() {
    this.toggleSubmitting();
    this.sentSuccessfully = true;
  }

  handleErrors(err:Response) {
    this.toggleSubmitting();
    switch (err.status) {
      case 400:
        _.each(err.json().errors, _.bind((error) => {
          this.appendError(this.errorConfig[error].message);
        }, this));
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

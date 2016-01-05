import {Component, View, OnInit}        from 'angular2/core';
import {FORM_DIRECTIVES}                from 'angular2/common';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {ContactService}                 from './../../services/contact.service';
import {ContactMessage}                 from './../../definitions/contact/contact.message';

declare var _:UnderscoreStatic;

@Component({
  selector: 'contact-form',
  providers: [Http, HTTP_PROVIDERS, ContactService],
})
@View({
  templateUrl: './components/contact/contact.form.html',
  styleUrls: ['./components/contact/contact.form.css'],
  directives: [FORM_DIRECTIVES],
})
export class ContactFormComponent implements OnInit {
  public message:ContactMessage;
  public submitClicked:boolean;
  public submitting:boolean;
  public sentSuccessfully:boolean;
  public submitBtnText:string;
  public serverErrors:string;
  public errorConfig:JSON;

  constructor(private _contactService:ContactService) {
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
    this._contactService.send(this.message).subscribe(
        (res:Response) =>
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
        _.each(err.json().errors, _.bind((error) => {
          this.appendError(this.errorConfig[error].message);
        }, this));
        break;
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

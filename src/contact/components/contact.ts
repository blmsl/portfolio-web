'use strict';
import {Component, View}      from 'angular2/core';
import {ContactMapComponent}  from './contact.gmap';
import {ContactFormComponent} from './contact.form';

@Component({
  selector: 'contact'
})
@View({
  directives: [
    ContactMapComponent,
    ContactFormComponent
  ],
  templateUrl: './contact/components/contact.html',
  styleUrls: ['./contact/components/contact.css']
})
export class ContactComponent {
}

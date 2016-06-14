'use strict';
import {Component} from '@angular/core';
import {ContactMapComponent} from './contact.gmap';
import {ContactFormComponent} from './contact.form';

@Component({
  selector: 'contact',
  directives: [
    ContactMapComponent,
    ContactFormComponent
  ],
  templateUrl: './contact/components/contact.html',
  styleUrls: ['./contact/components/contact.css']
})
export class ContactComponent {
}

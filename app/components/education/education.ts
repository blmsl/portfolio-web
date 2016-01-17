'use strict';
import {Component, View, OnInit}  from 'angular2/core';
import {EducationService}         from './../../services/education.service';
import {School}                   from './../../definitions/education/school';

@Component({
  selector: 'education',
  providers: [EducationService]
})
@View({
  templateUrl: './components/education/education.html',
  styleUrls: ['./components/education/education.css']
})
export class EducationComponent implements OnInit {
  public schools:Array<School>;

  constructor(private _educationService:EducationService) {
  }

  ngOnInit() {
    this.getSchools();
  }

  getSchools() {
    this._educationService.getSchools().then(
      schools =>
        this.schools = schools);
  }
}

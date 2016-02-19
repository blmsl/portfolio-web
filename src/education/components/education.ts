'use strict';
import {Component, View, OnInit}  from 'angular2/core';
import {EducationService}         from '../../shared/services/education.service';
import {School}                   from '../../shared/models/education/definitions/school';

@Component({
  selector: 'education',
  providers: [EducationService]
})
@View({
  templateUrl: './education/components/education.html',
  styleUrls: ['./education/components/education.css']
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

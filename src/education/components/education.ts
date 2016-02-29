'use strict';
import {Component, View, OnInit}            from 'angular2/core';
import {Pipe, PipeTransform}                from 'angular2/core';
import {Jsonp, JSONP_PROVIDERS, Response}   from 'angular2/http';
import {EducationService}                   from '../../shared/services/education.service';
import {School}                             from '../../shared/models/education/definitions/school';
import {CodeSchool}                         from '../../shared/models/education/definitions/code.school';

@Pipe({name: 'badgeUrl'})
export class BadgeUrlPipe implements PipeTransform {
  transform(badge:string):string {
    var badgeId = badge.match(/(\/\d{3}\/)/);
    return 'https://www.codeschool.com/users/ouq77/badges' + (badgeId && badgeId[0] || '');
  }
}
@Component({
  selector: 'education',
  providers: [Jsonp, JSONP_PROVIDERS, EducationService]
})
@View({
  pipes: [BadgeUrlPipe],
  templateUrl: './education/components/education.html',
  styleUrls: ['./education/components/education.css']
})
export class EducationComponent implements OnInit {
  public schools:Array<School>;
  public codeSchool:CodeSchool;
  private _educationService:EducationService;

  constructor(educationService:EducationService) {
    this._educationService = educationService;
  }

  ngOnInit() {
    this.getSchools();
    this.getCodeSchool();
  }

  getSchools() {
    this._educationService.getSchools().then(
      schools =>
        this.schools = schools);
  }

  getCodeSchool() {
    this._educationService.getCodeSchool().subscribe(
      (resp:Response) => {
        this.codeSchool = resp.json();
      }
    );
  }
}

'use strict';
import {Component, View, OnInit}  from 'angular2/core';
import {Pipe, PipeTransform}      from 'angular2/core';
import {Jsonp, JSONP_PROVIDERS}   from 'angular2/http';
import {EducationService}         from '../services/education';
import {School}                   from '../definitions/school';
import {CodeSchool}               from '../definitions/code.school';

@Pipe({name: 'badgeUrl'})
export class BadgeUrlPipe implements PipeTransform {
  transform(badge:string):string {
    let badgeId = badge.match(/(\/\d{2,3}\/)/);
    return 'https://www.codeschool.com/users/ouq77/badges' + (badgeId && badgeId[0] || '');
  }
}
@Pipe({name: 'memberDate'})
export class MemberDatePipe implements PipeTransform {
  transform(memberDate:string):string {
    return new Date(memberDate).toLocaleDateString();
  }
}
@Pipe({name: 'score'})
export class ScorePipe implements PipeTransform {
  transform(score:number):string {
    return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
@Component({
  selector: 'education',
  providers: [Jsonp, JSONP_PROVIDERS, EducationService]
})
@View({
  pipes: [BadgeUrlPipe, MemberDatePipe, ScorePipe],
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
      schools => this.schools = schools
    );
  }

  getCodeSchool() {
    this._educationService.getCodeSchool().subscribe(
      codeSchool => this.codeSchool = codeSchool
    );
  }
}

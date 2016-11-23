import {Component, OnInit} from '@angular/core';
import {EducationService} from '../services/education';
import {School} from '../definitions/school';
import {CodeSchool} from '../definitions/code.school';

@Component({
  selector: 'education',
  styleUrls: [
    './education/components/education.css',
  ],
  templateUrl: './education/components/education.html',
})
export class EducationComponent implements OnInit {
  public schools: Array<School>;
  public codeSchool: CodeSchool;
  private _educationService: EducationService;

  constructor(educationService: EducationService) {
    this._educationService = educationService;
  }

  ngOnInit() {
    this.getSchools();
    this.getCodeSchool();
  }

  getSchools() {
    EducationService.getSchools().then(
      schools => this.schools = schools,
    );
  }

  getCodeSchool() {
    this._educationService.getCodeSchool().subscribe(
      codeSchool => this.codeSchool = <CodeSchool>codeSchool,
    );
  }
}

'use strict';
import {Component, View, OnInit}  from 'angular2/core';
import {ExperienceService}        from '../../shared/services/experience.service';
import {Job}                      from '../../shared/models/experience/definitions/job';

@Component({
  selector: 'experience',
  providers: [ExperienceService]
})
@View({
  templateUrl: './experience/components/experience.html',
  styleUrls: ['./experience/components/experience.css']
})
export class ExperienceComponent implements OnInit {
  public jobs:Array<Job>;

  constructor(private _experienceService:ExperienceService) {
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this._experienceService.getJobs().then(
      jobs =>
        this.jobs = jobs
    );
  }
}

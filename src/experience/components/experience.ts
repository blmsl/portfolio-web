'use strict';
import {Component, OnInit} from 'angular2/core';
import {ExperienceService} from '../services/experience';
import {Job} from '../definitions/job';

@Component({
  selector: 'experience',
  providers: [ExperienceService],
  templateUrl: './experience/components/experience.html',
  styleUrls: ['./experience/components/experience.css']
})
export class ExperienceComponent implements OnInit {
  public jobs:Array<Job>;
  private _experienceService:ExperienceService;

  constructor(experienceService:ExperienceService) {
    this._experienceService = experienceService;
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

import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../services/experience';
import {Job} from '../definitions/job';

@Component({
  selector: 'experience',
  styleUrls: [
    './experience/components/experience.css',
  ],
  templateUrl: './experience/components/experience.html',
})
export class ExperienceComponent implements OnInit {
  public jobs: Array<Job>;
  private _experienceService: ExperienceService;

  constructor(experienceService: ExperienceService) {
    this._experienceService = experienceService;
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    ExperienceService.getJobs().then(
      jobs =>
        this.jobs = jobs,
    );
  }
}

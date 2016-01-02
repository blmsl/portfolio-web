import {Component, View, OnInit}  from 'angular2/core';
import {ExperienceService}        from './../../services/experience.service';
import {Job}                      from './../../definitions/experience/job';

@Component({
  selector: 'experience',
  providers: [ExperienceService],
})
@View({
  templateUrl: './components/experience/experience.html',
  styleUrls: ['./components/experience/experience.css'],
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

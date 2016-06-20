'use strict';
import {Component, OnInit} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';
import {ExperienceService} from '../services/experience';
import {Job} from '../definitions/job';

@Pipe({name: 'videoUrl'})
export class VideoUrlPipe implements PipeTransform {
  private _sanitationService:DomSanitizationService;

  constructor(sanitationService:DomSanitizationService) {
    this._sanitationService = sanitationService;
  }

  transform(videoUrl:string):SafeResourceUrl {
    return this._sanitationService.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
@Component({
  selector: 'experience',
  providers: [ExperienceService],
  pipes: [VideoUrlPipe],
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

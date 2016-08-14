'use strict';
import {Component, OnInit} from '@angular/core';
import {FooterService} from '../services/footer';
import {Link} from '../definitions/link';
import {LastModified} from '../definitions/last.modified';

@Component({
  selector: 'footer',
  providers: [FooterService],
  templateUrl: './footer/components/footer.html',
  styleUrls: ['./footer/components/footer.css']
})
export class FooterComponent implements OnInit {
  public links:Array<Link>;
  public currentDate:Date;
  public lastModified:LastModified;
  private _footerService:FooterService;

  constructor(footerService:FooterService) {
    this._footerService = footerService;
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.getLinks();
    this.getLastModified();
  }

  getLinks() {
    this._footerService.getLinks().then(
      links => this.links = <Array<Link>>links
    );
  }

  getLastModified() {
    this._footerService.getLastModified().subscribe(
      lastModified => this.lastModified = <LastModified>lastModified
    );
  }
}

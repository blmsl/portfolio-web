'use strict';
import {Component, OnInit} from '@angular/core';
import {FooterService} from '../services/footer';
import {Link} from '../definitions/link';

@Component({
  selector: 'footer',
  templateUrl: './footer/components/footer.html',
  styleUrls: [
    './footer/components/footer.css',
  ],
})
export class FooterComponent implements OnInit {
  public links: Array<Link>;
  public currentDate: Date;
  private _footerService: FooterService;

  constructor(footerService: FooterService) {
    this._footerService = footerService;
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this._footerService.getLinks().then(
      links => this.links = <Array<Link>>links
    );
  }
}

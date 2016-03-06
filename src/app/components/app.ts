'use strict';
import {Component, View, OnInit}  from 'angular2/core';
import {HeaderComponent}          from '../../header/components/header';
import {AboutComponent}           from '../../about/components/about';
import {SkillsComponent}          from '../../skills/components/skills';
import {ExperienceComponent}      from '../../experience/components/experience';
import {EducationComponent}       from '../../education/components/education';
import {ContactComponent}         from '../../contact/components/contact';
import {FooterComponent}          from '../../footer/components/footer';
import {AppService}               from '../../shared/services/app.service';
import {elementInViewport}        from '../../shared/common/common';

@Component({
  selector: 'container',
  providers: [AppService]
})
@View({
  directives: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app/components/app.html',
  styleUrls: ['./app/components/app.css']
})
export class AppComponent implements OnInit {
  private _appService:AppService;
  private _timeoutMenuAnimate:any;

  constructor(appService:AppService) {
    this._appService = appService;
  }

  ngOnInit() {
    this.initSmoothPageScroll();
    this._appService.consoleMessage();
  }

  initSmoothPageScroll() {
    (($) => {
      $('a[href*="#"]:not([href="#"])').click(
        function () {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target:JQuery = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 60
              }, 500);
              return false;
            }
          }
        }
      );

      $('#js_menu_button').click((e) => {
        e.preventDefault();

        if (this._timeoutMenuAnimate) {
          clearTimeout(this._timeoutMenuAnimate);
        }
        // wait half a second for menu collapse/expand to finish
        this._timeoutMenuAnimate = _.delay(function () {
          if ($('#js_navbar').hasClass('in')) {
            if (!elementInViewport($, $('#js_links_li'))) {
              $('html,body').animate({
                scrollTop: $('#js_menu_button').offset().top
              }, 1000);
            }
          }
        }, 500);
      });
    })(jQuery);
  }
}

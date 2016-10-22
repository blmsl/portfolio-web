'use strict';
import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app';
import {cancelableDelay} from '../../shared/common/delay';
import {elementInViewport} from '../../shared/common/element.in.viewport';

@Component({
  selector: 'container',
  styleUrls: [
    './app/components/app.css',
  ],
  templateUrl: './app/components/app.html',
})
export class AppComponent implements OnInit {
  private _appService: AppService;
  private _timeoutMenuAnimate: any;

  constructor(appService: AppService) {
    this._appService = appService;
  }

  ngOnInit() {
    this.initSmoothPageScroll();
    this._appService.consoleMessage();
  }

  initSmoothPageScroll() {
    (($: JQueryStatic) => {
      $('a[href*="#"]:not([href="#"])').click(function (e: JQueryEventObject) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target: JQuery = $(this.hash);
          target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60,
            }, 500);
          }
        }
      });

      $('#js_menu_button').click((e: JQueryEventObject) => {
        e.preventDefault();

        if (this._timeoutMenuAnimate) {
          clearTimeout(this._timeoutMenuAnimate);
        }
        // wait half a second for menu collapse/expand to finish
        this._timeoutMenuAnimate = cancelableDelay(500, () => {
          if ($('#js_navbar').hasClass('in')) {
            if (!elementInViewport($, $('#js_links_li'))) {
              $('html,body').animate({
                scrollTop: $('#js_menu_button').offset().top,
              }, 1000);
            }
          }
        });
      });
    })(jQuery);
  }
}

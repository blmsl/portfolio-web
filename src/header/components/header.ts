'use strict';
import {Component, View, OnInit}          from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response}   from 'angular2/http';
import {HeaderService}                    from '../../shared/services/header.service';
import {MENU_CONFIG, GRID_ROTATOR_CONFIG} from '../../shared/models/header/header.config';

@Component({
  selector: 'header',
  providers: [Http, HTTP_PROVIDERS, HeaderService]
})
@View({
  templateUrl: './header/components/header.html',
  styleUrls: ['./header/components/header.css']
})
export class HeaderComponent implements OnInit {
  public imageIds:Array<String>;
  private _previousWidth:number;
  private _previousHeight:number;

  constructor(private _headerService:HeaderService) {
    this.setPreviousWidth(0);
    this.setPreviousHeight(0);
  }

  ngOnInit() {
    this.initImageIds();
    this.initResizeListener();
  }

  initImageIds() {
    this._headerService.getImageIds().subscribe(
      (res:Response) =>
        this.initGridRotator(res.json().imageIds)
    );
  }

  initResizeListener() {
    (($) => {
      $(window).on('resize', _.bind(() => {
        this.setBannerSize(this.getPreviousWidth(), this.getPreviousHeight());
      }, this));
    })(jQuery);
  }

  initGridRotator(imageIds:Array<String>) {
    this.imageIds = imageIds;
    (($) => {
      // For background slider
      _.delay(_.bind(() => {
        $('#ri-grid').gridrotator(GRID_ROTATOR_CONFIG);
        this.setBannerSize(this.getPreviousWidth(), this.getPreviousHeight());
        this.initNavigation();
      }, this), 250);
    })(jQuery);
  }

  initNavigation() {
    (($) => {
      $('.navbar-wrapper').stickUp(MENU_CONFIG);

      $('.navbar.navbar-inverse.navbar-static-top a').click(
        () =>
          $('.navbar-collapse').addClass('hide-class').addClass('collapse').removeClass('in')
      );

      $('.navbar-toggle').click(
        () =>
          $('.navbar-collapse').removeClass('hide-class')
      );
    })(jQuery);
  }

  setBannerSize(previousWidth, previousHeight) {
    (($, previousWidth, previousHeight) => {
      var windowWidth = $(window).width(),
        windowHeight = $(window).innerHeight(),
        widthChanged = previousWidth !== windowWidth,
        heightChanged = false;
      // mobile browsers ads about 60px to screen height when hiding address bar - ignore this
      if (windowHeight - previousHeight > 60) {
        heightChanged = true;
      }
      if (windowHeight - previousHeight < -60) {
        heightChanged = true;
      }
      if (widthChanged || heightChanged) {
        $('.banner').css({
          'width': windowWidth,
          'height': windowHeight - 60
        });
        this.setDynamicCssValues();
        this.setPreviousWidth(windowWidth);
        this.setPreviousHeight(windowHeight);
      }
    })(jQuery, previousWidth, previousHeight);
  }

  setDynamicCssValues() {
    (($) => {
      var bannerText = $('.banner-text');
      bannerText.css('top', ((($(window).innerHeight() - bannerText.height()) / 2) - 63));
    })(jQuery);
  }

  setPreviousWidth(previousWidth:number) {
    this._previousWidth = previousWidth;
  }

  getPreviousWidth() {
    return this._previousWidth;
  }

  setPreviousHeight(previousHeight:number) {
    this._previousHeight = previousHeight;
  }

  getPreviousHeight() {
    return this._previousHeight;
  }
}

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
    this._previousWidth = 0;
    this._previousHeight = 0;
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
        this.setBannerSize(this._previousWidth, this._previousHeight);
      }, this));
    })(jQuery);
  }

  initGridRotator(imageIds:Array<String>) {
    this.imageIds = imageIds;
    (($) => {
      // Delay 250ms for images to be rendered in template
      _.delay(_.bind(() => {
        this.setBannerSize(this._previousWidth, this._previousHeight);
        $('#ri-grid').gridrotator(GRID_ROTATOR_CONFIG);
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
        windowHeight = $(window).height(),
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
        this._previousWidth = windowWidth;
        this._previousHeight = windowHeight;
      }
    })(jQuery, previousWidth, previousHeight);
  }

  setDynamicCssValues() {
    (($) => {
      var bannerText = $('.banner-text');
      bannerText.css('top', ((($(window).height() - bannerText.height()) / 2) - 63));
    })(jQuery);
  }
}

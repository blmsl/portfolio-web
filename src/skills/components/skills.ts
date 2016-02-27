'use strict';
import {Component, View, OnInit}  from 'angular2/core';
import {SkillService}             from '../../shared/services/skills.service';
import {Skill}                    from '../../shared/models/skills/definitions/skill';
import {elementInViewport}        from '../../shared/common/common';

@Component({
  selector: 'skills',
  providers: [SkillService]
})
@View({
  templateUrl: './skills/components/skills.html',
  styleUrls: ['./skills/components/skills.css']
})
export class SkillsComponent implements OnInit {
  public skills:Array<Skill>;
  private _timeoutScroll:any;
  private _skillChartDrawn:boolean;

  constructor(private _skillService:SkillService) {
    this._skillChartDrawn = false;
  }

  ngOnInit() {
    this.getSkills();
    this.initScrollListener();
  }

  getSkills() {
    this._skillService.getSkills().then(
      (skills) => {
        this.skills = skills;
        this.drawChart();
      }
    );
  }

  initScrollListener() {
    (($) => {
      $(document).on('scroll', _.bind(() => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll);
        }
        this._timeoutScroll = _.delay(_.bind(function () {
          if (!this._skillChartDrawn) {
            this.drawChart();
          }
        }, this), 500);
      }, this));
    })(jQuery);

    if (!this._skillChartDrawn) {
      this.drawChart();
    }
  }

  drawChart() {
    (($) => {
      $('.js_trigger_skills').each(_.bind((index, val) => {
        if (!this._skillChartDrawn && elementInViewport($, $(val))) {
          this._skillChartDrawn = true;
          $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }
      }, this));
    })(jQuery);
  }
}

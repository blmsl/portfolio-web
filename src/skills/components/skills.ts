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
  private _skillService:SkillService;
  private _timeoutScroll:any;
  private _skillChartDrawn:boolean;

  constructor(skillService:SkillService) {
    this._skillService = skillService;
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
      $(document).on('scroll', () => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll);
        }
        this._timeoutScroll = _.delay(() => {
          if (!this._skillChartDrawn) {
            this.drawChart();
          }
        }, 500);
      });
    })(jQuery);

    if (!this._skillChartDrawn) {
      this.drawChart();
    }
  }

  drawChart() {
    (($) => {
      $('.js_trigger_skills').each((index, val) => {
        if (!this._skillChartDrawn && elementInViewport($, $(val))) {
          this._skillChartDrawn = true;
          $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }
      });
    })(jQuery);
  }
}

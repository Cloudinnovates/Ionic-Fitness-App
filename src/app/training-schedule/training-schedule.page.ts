import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-training-schedule',
  templateUrl: './training-schedule.page.html',
  styleUrls: ['./training-schedule.page.scss'],
})
@Injectable()
export class TrainingSchedulePage implements OnInit {
  title; description; schedule;
  selectedWeek = '';
  selectedDay = 0;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let state = this.router.getCurrentNavigation().extras.state;
        this.title = state.title;
        this.description = state.description;
        this.schedule = state.schedule;
      }
    });
  }

  ngOnInit() {
  }

  handleItemClick = (week, day) => {
    if (week == this.selectedWeek && this.selectedDay == day) {
      this.selectedWeek = '';
      this.selectedDay = 0;
    }
    else {
      this.selectedWeek = week;
      this.selectedDay = day;
    }
  }

  handleVideoClick = (item) => {
    let navigationExtras: NavigationExtras = {
      state: {
        title: item.excercise,
        file: item.file
      }
    };
    this.router.navigate(['video'], navigationExtras);
  }
//,{
//   volume: 0.5,
//   scalingMode: 2
// }
}

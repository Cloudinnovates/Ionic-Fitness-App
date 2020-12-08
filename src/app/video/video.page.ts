import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var cordova:any;

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  title; filePath;

  constructor(private route: ActivatedRoute, private router: Router) {
    //cordova.file.applicationDirectory + 'www/assets/video/Back_Extension.mp4'
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let state = this.router.getCurrentNavigation().extras.state;
        this.title = state.title;
        this.filePath = 'assets/video/' + state.file + '.mp4';
      }
    });
  }

  ngOnInit() {
  }

}

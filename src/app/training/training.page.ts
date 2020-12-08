import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleClickItem = (id) => {
    
  }
}

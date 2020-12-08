import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  items = [
    {
      title: 'BREAKFAST',
      description: 'Approx 500 calories',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/breakfast.jpg) center bottom no-repeat',
      route: '/breakfast'
    },
    {
      title: 'LUNCH AND DINNER',
      description: 'Approx 500 calories',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/lunchanddinner.jpg) center bottom no-repeat',
      route: '/lunchanddinner'
    },
    {
      title: 'SNACKS',
      description: 'Approx 200 calories',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/snacks.jpg) center bottom no-repeat',
      route: '/snacks'
    },
    {
      title: 'SMOOTHIE INGREDIENTS',
      description: '200 calories',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/smoothie-ingredients.jpg) center bottom no-repeat',
      route: '/ingredients'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

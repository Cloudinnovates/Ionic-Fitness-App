import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.page.html',
  styleUrls: ['./snacks.page.scss'],
})
export class SnacksPage implements OnInit {

  items = [
    {
      name: 'EGGS',
      cooking: 'Boiled, poached',
      unit: 'Eggs',
      size: 3
    },
    {
      name: 'UNSWEETENED BEEF JERKY',
      unit: 'Grams',
      size: 70
    },
    {
      name: 'PROTEIN POWDERS',
      unit: 'Grams',
      size: 50
    },
    {
      name: 'ALMONDS',
      unit: 'Grams',
      size: 20
    },
    {
      name: 'PEANUTS',
      unit: 'Grams',
      size: 20
    },
    {
      name: 'COTTAGE CHEESE',
      unit: 'Grams',
      size: 200
    },
    {
      name: 'GREEK YOGURT AND MIXED BERRIES',
      unit: 'Grams',
      size: 300
    },
    {
      name: 'HALLOUMI',
      cooking: 'Grilled or dry fried',
      unit: 'Grams',
      size: 65
    },
    {
      name: 'WHOLE MEAL BREAD',
      unit: 'Slice',
      size: 3
    },
    {
      name: 'CHEDDAR CHEESE',
      unit: 'Grams',
      size: 50
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

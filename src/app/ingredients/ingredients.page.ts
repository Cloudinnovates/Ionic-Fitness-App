import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  items = [
    {
      name: 'MIXED BERRIES',
      cooking: 'Blueberries, Strawberries, Raspberries',
      unit: 'Grams',
      size: 100
    },
    {
      name: 'VANILLA PROTEIN',
      unit: 'Grams',
      size: 25
    },
    {
      name: 'ALMOND MILK',
      unit: 'Millilitre',
      size: 150
    },
    {
      name: 'ICE',
      unit: 'Grams',
      size: 0
    },
    {
      name: 'CHOCOLATE PROTEIN',
      unit: 'Grams',
      size: 25
    },
    {
      name: 'BANANA',
      unit: 'Grams',
      size: 70
    },
    {
      name: 'SEMI SKIMMED MILK',
      unit: 'Millilitre',
      size: 150
    },
    {
      name: 'MANGO',
      unit: 'Grams',
      size: 100
    },
    {
      name: 'COCONUT WATER',
      unit: 'Millilitre',
      size: 150
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

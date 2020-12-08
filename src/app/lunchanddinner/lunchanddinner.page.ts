import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunchanddinner',
  templateUrl: './lunchanddinner.page.html',
  styleUrls: ['./lunchanddinner.page.scss'],
})
export class LunchanddinnerPage implements OnInit {

  items = [
    {
      name: 'SWEET POTATO',
      kind: 'Carb',
      cooking: 'Boil and mash, bake',
      size: 150,
      unit: '',
      calories: 150
    },
    {
      name: 'TINNED TUNA WITH SUNFLOWER OIL',
      kind: 'Protein',
      cooking: '',
      size: 150,
      unit: '',
      calories: 150
    },
    {
      name: 'Broccoli',
      kind: 'Veg',
      cooking: 'Boil, steam',
      size: '',
      unit: '',
      calories: 0
    },
    {
      name: 'MINCED BEEF OR PORK',
      kind: 'Protein',
      cooking: 'Chilli mince or grill',
      size: 150,
      unit: '',
      calories: 150
    },
    {
      name: 'BROWN RICE',
      kind: 'Carb',
      cooking: '',
      size: 150,
      unit: '',
      calories: 150
    },
    {
      name: 'CHICKEN OR TURKEY',
      kind: 'Protein',
      cooking: 'Grill',
      size: 150,
      unit: '',
      calories: 150
    },
    {
      name: 'COD/HADDOCK WHITE',
      kind: 'Carb',
      cooking: 'Oven cook',
      size: 200,
      unit: '',
      calories: 200
    },
    {
      name: 'POTATOES',
      kind: 'Carb',
      cooking: 'Bake, boil',
      size: 200,
      unit: '',
      calories: 200
    },
    {
      name: 'PEAS',
      kind: 'Veg',
      cooking: 'Boil',
      size: '',
      unit: '',
      calories: 0
    },
    {
      name: 'WHOLEMEAL WRAP',
      kind: 'Carb',
      cooking: 'Grill',
      size: 2,
      unit: 'wraps',
      calories: 0
    },
    {
      name: 'MIXED PEPPERS',
      kind: 'Veg',
      cooking: '',
      size: '',
      unit: '',
      calories: 0
    },
    {
      name: 'TOFU',
      kind: 'Protein',
      cooking: 'Stir fry',
      size: 150,
      unit: '',
      calories: 150
    },
    {
      name: 'BROWN RICE',
      kind: 'Carb',
      cooking: 'Boil',
      size: 125,
      unit: '',
      calories: 125
    },
    {
      name: 'MIXED VEG',
      kind: 'veg',
      cooking: '',
      size: '',
      unit: '',
      calories: 0
    },
    {
      name: 'SALMON',
      kind: 'Protein',
      cooking: 'Pan fry',
      size: 200,
      unit: '',
      calories: 200
    },
    {
      name: 'BROWN RICE OR POTATO',
      kind: 'Carb',
      cooking: 'Boil',
      size: 150,
      unit: '',
      calories: 150
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

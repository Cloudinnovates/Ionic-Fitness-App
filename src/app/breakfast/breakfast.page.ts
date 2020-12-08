import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {

  items = [
    {
      contents: ['3 EGG AND VEGETABLE OMELETTE', 'CHEDDAR CHEESE', '1 SLICE WHOLEMEAL TOAST'],
      protein: 20,
      calories: 450
    },
    {
      contents: ['SALMON 100G'],
      protein: 24,
      calories: 178
    },
    {
      contents: ['AVOCADO 100G'],
      protein: 0,
      calories: 160
    },
    {
      contents: ['WHOLEMEAL BREAD'],
      protein: 0,
      calories: 55
    },
    {
      contents: ['OATS 75G 120ML MILK'],
      protein: 20,
      calories: 450
    },
    {
      contents: ['WHEY PROTEIN 25G'],
      protein: 18,
      calories: 100
    },
    {
      contents: ['3 EGGS'],
      protein: 18,
      calories: 240
    },
    {
      contents: ['AVOCADO 75G'],
      protein: 0,
      calories: 120
    },
    {
      contents: ['WHOLEMEAL TOAST'],
      protein: 0,
      calories: 55
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.page.html',
  styleUrls: ['./measurement.page.scss'],
})
export class MeasurementPage implements OnInit {

  datas = [
    {
      img:'form-calender-icon.png',
      value:'30',
      unit:'Year'
    },
    {
      img:'form-height-icon.png',
      value:'175',
      unit:'cm'
    },
    {
      img:'form-weight-icon.png',
      value:'50',
      unit:'kg'
    },
    {
      img:'form-weist-icon.png',
      value:'34',
      unit:'cm'
    },
    {
      img:'form-hip-icon.png',
      value:'36',
      unit:'cm'
    }
  ];

  man = true;
  update_success = false;
  
  constructor() { }

  ngOnInit() {
  }

  funcUpdate(){
    this.update_success = true;
    setTimeout(() => this.update_success = false, 3000);
  }

}

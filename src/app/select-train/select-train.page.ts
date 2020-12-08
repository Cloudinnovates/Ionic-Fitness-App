import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-select-train',
  templateUrl: './select-train.page.html',
  styleUrls: ['./select-train.page.scss'],
})
export class SelectTrainPage implements OnInit {

  cur_sel = 0;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private storage: Storage
    //private appsPreference: AppPreferences
  ) { }

  ngOnInit() {
  }

  goNext(param){
    this.cur_sel = param;
    if(param == 1)
      this.storage.set("train","weight");
    else if(param == 2)
      this.storage.set("train","muscle");
    setTimeout(() => {
      this.router.navigate(['/select-gender']);
    }, 1000);
  }

  goBack(){
    this.navCtrl.pop();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-gender',
  templateUrl: './select-gender.page.html',
  styleUrls: ['./select-gender.page.scss'],
})
export class SelectGenderPage implements OnInit {

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
      this.storage.set("sex", "female");
    else if(param == 2)
      this.storage.set("sex", "male");
    setTimeout(() => {
      this.router.navigate(['/select-measurement']);
    }, 1000);
  }

  goBack(){
    this.navCtrl.pop();
  }

}

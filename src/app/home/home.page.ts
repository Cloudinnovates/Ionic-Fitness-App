import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {
      title: 'Your Program',
      image: 'pie-hover.png',
      route: '/select-train'
    },
    // {
    //   title: 'Recipe book',
    //   image: 'recepie-hover.png',
    //   route: '/recipe'
    // },
    {
      title: 'Update details',
      image: 'detail-icon.png',
      route: '/update_details'
    }
  ];

  show_welcome = false;

  constructor(
    private routerOutlet: IonRouterOutlet,
    public menuCtrl: MenuController,
    private storage: Storage
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.routerOutlet.swipeGesture = false;
  }

  ionViewDidEnter(){

    this.storage.get("isFirst").then((res) => { 
      if(res == null){
        this.storage.set("isFirst","true");
        setTimeout(() => this.show_welcome = true, 1000);
      }
    });

    this.storage.get("level").then((res) => { 
      if(res != null){
        this.items[0].route = '/program';
      }
    });
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

  handleItemClick = () => {

  }

}

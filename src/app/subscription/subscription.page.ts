import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  product: any;

  price; billingPeriodStr;
  billingPeriod; billingPeriodUnit;


  constructor(
    private router: Router,
    public platform: Platform,
    private iap2: InAppPurchase2,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      // this.setup();
    })
  }

  setup() {
    this.registerHandlersForPurchase('standard_monthly');

    this.iap2.verbosity = this.iap2.DEBUG;
    this.iap2.validator = "https://validator.fovea.cc/v1/validate?appName=com.fitguru&apiKey=9fad6b71-cc78-46d8-8253-5de7f3df3832";
    this.iap2.register({
      id: 'standard_monthly',
      type: this.iap2.PAID_SUBSCRIPTION
    });
    this.product = this.iap2.get('standard_monthly');
  }

  restore() {
    this.iap2.refresh();
  }

  checkout(param) {
    if (param == 1){
      this.storage.set("trial","true");
      this.router.navigate(['/home']);
    }
    else
      alert("Not enabled yet!");
    // try {
    //   this.iap2.order('standard_monthly').then((p) => {
    //     console.log('Purchase Succesful' + JSON.stringify(p));
    //   }).catch((e) => {
    //     console.log('Error Ordering From Store' + e);
    //   });
    // } catch (err) {
    //   console.log('Error Ordering ' + JSON.stringify(err));
    // }
  }

  registerHandlersForPurchase(productId) {
    let self = this.iap2;
    this.iap2.when(productId).updated((product) => {
      this.price = this.product.price;
      this.billingPeriodStr = (this.product.billingPeriod == 1 ? "" : this.product.billingPeriod) + this.billingPeriodUnit + (this.product.billingPeriod > 1 ? "s" : "");

      if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
        product.finish();
        this.router.navigate(['/home']);
      }
    });
    this.iap2.when(productId).registered((product: IAPProduct) => {
      // alert(` owned ${product.owned}`);
    });
    this.iap2.when(productId).owned((product: IAPProduct) => {
      // alert(` owned ${product.owned}`);
      product.finish();
      this.router.navigate(['/home']);
    });
    this.iap2.when(productId).approved((product: IAPProduct) => {
      // alert('approved');
      product.verify();
    });
    this.iap2.when(productId).verified((product: IAPProduct) => {
      // alert('verified');
      this.router.navigate(['/home']);
    });
    this.iap2.when(productId).refunded((product: IAPProduct) => {
      // alert('refunded');
    });
    this.iap2.when(productId).expired((product: IAPProduct) => {
      // alert('expired');
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

}

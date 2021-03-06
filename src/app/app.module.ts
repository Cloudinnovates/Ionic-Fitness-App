import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { environment } from '../environments/environment';
import { Appsflyer } from "@ionic-native/appsflyer/ngx";
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    GooglePlus,
    EmailComposer,
    Appsflyer,
    InAppPurchase2,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

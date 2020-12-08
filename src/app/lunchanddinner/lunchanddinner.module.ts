import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LunchanddinnerPageRoutingModule } from './lunchanddinner-routing.module';

import { LunchanddinnerPage } from './lunchanddinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunchanddinnerPageRoutingModule
  ],
  declarations: [LunchanddinnerPage]
})
export class LunchanddinnerPageModule {}

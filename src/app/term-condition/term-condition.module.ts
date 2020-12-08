import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermConditionPageRoutingModule } from './term-condition-routing.module';

import { TermConditionPage } from './term-condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermConditionPageRoutingModule
  ],
  declarations: [TermConditionPage]
})
export class TermConditionPageModule {}

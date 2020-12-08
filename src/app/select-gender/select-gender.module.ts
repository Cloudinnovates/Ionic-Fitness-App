import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectGenderPageRoutingModule } from './select-gender-routing.module';

import { SelectGenderPage } from './select-gender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectGenderPageRoutingModule
  ],
  declarations: [SelectGenderPage]
})
export class SelectGenderPageModule {}

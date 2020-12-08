import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingSchedulePageRoutingModule } from './training-schedule-routing.module';

import { TrainingSchedulePage } from './training-schedule.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingSchedulePageRoutingModule
  ],
  declarations: [TrainingSchedulePage]
})
export class TrainingSchedulePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingSchedulePage } from './training-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingSchedulePageRoutingModule {}

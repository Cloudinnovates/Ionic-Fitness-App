import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTrainPage } from './select-train.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTrainPageRoutingModule {}

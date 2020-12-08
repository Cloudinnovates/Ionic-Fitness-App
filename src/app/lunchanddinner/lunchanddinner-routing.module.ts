import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LunchanddinnerPage } from './lunchanddinner.page';

const routes: Routes = [
  {
    path: '',
    component: LunchanddinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunchanddinnerPageRoutingModule {}

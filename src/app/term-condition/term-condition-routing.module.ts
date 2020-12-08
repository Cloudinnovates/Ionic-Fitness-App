import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermConditionPage } from './term-condition.page';

const routes: Routes = [
  {
    path: '',
    component: TermConditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermConditionPageRoutingModule {}

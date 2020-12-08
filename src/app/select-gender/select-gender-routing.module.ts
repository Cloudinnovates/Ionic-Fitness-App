import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectGenderPage } from './select-gender.page';

const routes: Routes = [
  {
    path: '',
    component: SelectGenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectGenderPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatafromuserPage } from './datafromuser.page';

const routes: Routes = [
  {
    path: '',
    component: DatafromuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatafromuserPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestamenuPage } from './restamenu.page';

const routes: Routes = [
  {
    path: '',
    component: RestamenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestamenuPageRoutingModule {}

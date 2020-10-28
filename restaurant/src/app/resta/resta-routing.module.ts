import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaPage } from './resta.page';

const routes: Routes = [
  {
    path: '',
    component: RestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaPageRoutingModule {}

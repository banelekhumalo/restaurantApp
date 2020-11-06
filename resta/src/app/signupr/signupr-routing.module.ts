import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignuprPage } from './signupr.page';

const routes: Routes = [
  {
    path: '',
    component: SignuprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignuprPageRoutingModule {}

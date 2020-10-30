import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginrPage } from './loginr.page';

const routes: Routes = [
  {
    path: '',
    component: LoginrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginrPageRoutingModule {}

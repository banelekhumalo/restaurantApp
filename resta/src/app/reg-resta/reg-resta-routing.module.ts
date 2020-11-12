import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegRestaPage } from './reg-resta.page';

const routes: Routes = [
  {
    path: '',
    component: RegRestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegRestaPageRoutingModule {}

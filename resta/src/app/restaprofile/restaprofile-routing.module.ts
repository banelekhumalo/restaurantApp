import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaprofilePage } from './restaprofile.page';

const routes: Routes = [
  {
    path: '',
    component: RestaprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaprofilePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdituserprofPage } from './edituserprof.page';

const routes: Routes = [
  {
    path: '',
    component: EdituserprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdituserprofPageRoutingModule {}

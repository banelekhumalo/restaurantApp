import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsModalPage } from './appointments-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsModalPageRoutingModule {}

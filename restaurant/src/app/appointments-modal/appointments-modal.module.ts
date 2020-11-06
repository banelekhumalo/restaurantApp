import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsModalPageRoutingModule } from './appointments-modal-routing.module';

import { AppointmentsModalPage } from './appointments-modal.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentsModalPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [AppointmentsModalPage]
})
export class AppointmentsModalPageModule {}

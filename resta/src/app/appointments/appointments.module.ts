import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { AppointmentsPageRoutingModule } from './appointments-routing.module';

import { AppointmentsPage } from './appointments.page';
import { from } from 'rxjs';
import localeDe from '@angular/common/locales/de'
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    AppointmentsPageRoutingModule
  ],
  declarations: [AppointmentsPage],
  providers:[{provide: LOCALE_ID, useValue:'de-DE'}]
})
export class AppointmentsPageModule {}

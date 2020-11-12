import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegRestaPageRoutingModule } from './reg-resta-routing.module';

import { RegRestaPage } from './reg-resta.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
   // FormsModule,
    IonicModule,
    RegRestaPageRoutingModule
  ],
  declarations: [RegRestaPage]
})
export class RegRestaPageModule {}

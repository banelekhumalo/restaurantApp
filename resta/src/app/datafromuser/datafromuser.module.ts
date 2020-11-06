import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatafromuserPageRoutingModule } from './datafromuser-routing.module';

import { DatafromuserPage } from './datafromuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatafromuserPageRoutingModule
  ],
  declarations: [DatafromuserPage]
})
export class DatafromuserPageModule {}

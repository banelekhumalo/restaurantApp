import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestprofilePageRoutingModule } from './restprofile-routing.module';

import { RestprofilePage } from './restprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestprofilePageRoutingModule
  ],
  declarations: [RestprofilePage]
})
export class RestprofilePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaprofilePageRoutingModule } from './restaprofile-routing.module';

import { RestaprofilePage } from './restaprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaprofilePageRoutingModule
  ],
  declarations: [RestaprofilePage]
})
export class RestaprofilePageModule {}

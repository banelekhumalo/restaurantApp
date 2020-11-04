import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaProfilePageRoutingModule } from './resta-profile-routing.module';

import { RestaProfilePage } from './resta-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaProfilePageRoutingModule
  ],
  declarations: [RestaProfilePage]
})
export class RestaProfilePageModule {}

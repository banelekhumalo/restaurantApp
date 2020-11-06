import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaPageRoutingModule } from './resta-routing.module';

import { RestaPage } from './resta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaPageRoutingModule
  ],
  declarations: [RestaPage]
})
export class RestaPageModule {}

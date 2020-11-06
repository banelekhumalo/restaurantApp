import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestamenuPageRoutingModule } from './restamenu-routing.module';

import { RestamenuPage } from './restamenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestamenuPageRoutingModule
  ],
  declarations: [RestamenuPage]
})
export class RestamenuPageModule {}

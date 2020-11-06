import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestasetingsPageRoutingModule } from './restasetings-routing.module';

import { RestasetingsPage } from './restasetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestasetingsPageRoutingModule
  ],
  declarations: [RestasetingsPage]
})
export class RestasetingsPageModule {}

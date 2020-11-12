import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignuprPageRoutingModule } from './signupr-routing.module';

import { SignuprPage } from './signupr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignuprPageRoutingModule
  ],
  declarations: [SignuprPage]
})
export class SignuprPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginrPageRoutingModule } from './loginr-routing.module';

import { LoginrPage } from './loginr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginrPageRoutingModule
  ],
  declarations: [LoginrPage]
})
export class LoginrPageModule {}

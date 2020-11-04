import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestasettingsPageRoutingModule } from './restasettings-routing.module';

import { RestasettingsPage } from './restasettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestasettingsPageRoutingModule
  ],
  declarations: [RestasettingsPage]
})
export class RestasettingsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdituserprofPageRoutingModule } from './edituserprof-routing.module';

import { EdituserprofPage } from './edituserprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EdituserprofPageRoutingModule
  ],
  declarations: [EdituserprofPage]
})
export class EdituserprofPageModule {}

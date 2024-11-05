import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TucoleccionPageRoutingModule } from './tucoleccion-routing.module';

import { TucoleccionPage } from './tucoleccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TucoleccionPageRoutingModule
  ],
  declarations: [TucoleccionPage]
})
export class TucoleccionPageModule {}

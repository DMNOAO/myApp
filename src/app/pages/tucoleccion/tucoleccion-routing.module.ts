import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TucoleccionPage } from './tucoleccion.page';

const routes: Routes = [
  {
    path: '',
    component: TucoleccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TucoleccionPageRoutingModule {}

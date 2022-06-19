import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculusPage } from './calculus.page';

const routes: Routes = [
  {
    path: '',
    component: CalculusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculusPageRoutingModule {}

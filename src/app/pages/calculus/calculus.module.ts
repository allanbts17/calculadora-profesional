import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculusPageRoutingModule } from './calculus-routing.module';

import { CalculusPage } from './calculus.page';
import { KatexModule } from 'ng-katex';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculusPageRoutingModule,
    KatexModule,
    ComponentsModule
  ],
  declarations: [CalculusPage]
})
export class CalculusPageModule {}

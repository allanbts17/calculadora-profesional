import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownKeyboardComponent } from './down-keyboard/down-keyboard.component';
import { UpKeyboardComponent } from './up-keyboard/up-keyboard.component';

const components = [DownKeyboardComponent,UpKeyboardComponent]

@NgModule({
  declarations: [components],
  exports:[components],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

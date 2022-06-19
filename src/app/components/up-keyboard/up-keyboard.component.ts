import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-keyboard',
  templateUrl: './up-keyboard.component.html',
  styleUrls: ['./up-keyboard.component.scss'],
})
export class UpKeyboardComponent implements OnInit {
  left_buttons = []
  right_buttons = []
  property = {
    pressed:false
  }
  symbols = {
    left:['\u00F7',')','√\u25A1',
          'X','(','',
          '-','[','^',
          '+',']','='],
    right:['trig','sto➔',
            'cuad','simb',
            'π','shift⇧',
          'Del','ans']
  }
  constructor() {
    this.fillProperty()
  }

  ngOnInit() {}

  fillProperty(){
    for(let symbol of this.symbols.left){
      this.left_buttons.push({symbol:symbol,pressed:false})
    }
    for(let symbol of this.symbols.right){
      this.right_buttons.push({symbol:symbol,pressed:false})
    }
  }

  pressed(button){
    button.pressed = true
    //this.buttonPressedEvent.emit(button.symbol)
  }

  released(button){
    button.pressed = false
  }

}

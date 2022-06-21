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
    left:['\u00F7',')','svg1',
          'X','(','svg2',
          '-','[','^',
          '+',']','='],
    right:['trig','sto ➔',
            'svg3','simb',
            'π','shift ⇧',
          'Del','ans']
  }
  arrows_pressed = {
    up:1,
    down:1,
    forward:1,
    back:1
  }
  constructor() {
    this.fillProperty()
  }

  ngOnInit() {}

  fillProperty(){
    for(let symbol of this.symbols.left){
      if(symbol == 'svg1'){
        this.left_buttons.push({symbol:"",pressed:false,svg:symbol})
      } else if(symbol == 'svg2'){
        this.left_buttons.push({symbol:"",pressed:false,svg:symbol})
      } else {
        this.left_buttons.push({symbol:symbol,pressed:false,svg:""})
      }

    }
    for(let symbol of this.symbols.right){
      if(symbol == 'svg3'){
        this.right_buttons.push({symbol:"",pressed:false,svg:symbol})
      } else {
        this.right_buttons.push({symbol:symbol,pressed:false,svg:""})
      }

    }
  }

  pressed(button){
    button.pressed = true
    //this.buttonPressedEvent.emit(button.symbol)
  }

  released(button){
    button.pressed = false
  }

  arrow_pressed(arrow){
    this.arrows_pressed[arrow] = 0.5
    console.log('preeesed')
  }

  arrow_released(arrow){
    this.arrows_pressed[arrow] = 1
  }

}

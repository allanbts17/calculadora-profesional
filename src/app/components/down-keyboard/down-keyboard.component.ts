import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-down-keyboard',
  templateUrl: './down-keyboard.component.html',
  styleUrls: ['./down-keyboard.component.scss'],
})
export class DownKeyboardComponent implements OnInit {
  @Output() buttonPressedEvent = new EventEmitter<String>();

  symbols = ['A','B','C','D','E','F','G','7','8','9',
             'H','I','J','K','L','M','N','4','5','6',
             'O','P','Q','R','S','T','U','1','2','3',
             'V','W','X','Y','Z','\u2334','.','0','\u2BA8'
            ]
  buttons = []
  property = {
    pressed:false
  }
 // enter = &#11176;
  constructor() {
    this.fillProperty()
  }

  ngOnInit() {}

  fillProperty(){
    for(let symbol of this.symbols){
      this.buttons.push({symbol:symbol,pressed:false})
    }
  }
  pressed(button){
    button.pressed = true
    this.buttonPressedEvent.emit(button.symbol)
  }

  released(button){
    button.pressed = false
  }

}

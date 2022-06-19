import { Component, OnInit } from '@angular/core';
import nerdamer from 'nerdamer/all.min';


@Component({
  selector: 'app-calculus',
  templateUrl: './calculus.page.html',
  styleUrls: ['./calculus.page.scss'],
})
export class CalculusPage implements OnInit {
  eq = ['\\mathrm{cos} \\left(x\\right)+3x^{2}',
'H = \\ sum_ {i = 1} ^ {m} p_ {i} log_ {2} (p_ {i})',
'\\frac{2}{13}']
equation = ''

  constructor() {
    console.log('Starting nerdamer test')
    console.log('...')

    var e = nerdamer('x^2+2*(cos(x)+x*x)');
    console.log(e)
    console.log(e.toTeX());
    this.equation= e.toTeX()

    console.log('Evaluating')
    var e = nerdamer('x^2+2*(cos(x)+x*x)',{x:6}).evaluate();

    console.log(e.text());
  }

  ngOnInit() {

  }

  downKeyboardButtonPressed(symbol){
    console.log(symbol)
  }

}

//https://nerdamer.com/quickstart.html

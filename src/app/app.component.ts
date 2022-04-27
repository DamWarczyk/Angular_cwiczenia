import { Component } from '@angular/core';
import {NULL_AS_ANY} from "@angular/compiler-cli/src/ngtsc/typecheck/src/expression";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Cwiczenia';
  sum = 0;
  b!: number;
  znak!: string;


  wyswietlanie():String {
    let dispay: String;
    dispay = this.sum.toString();
    // if (this.b =! undefined)
    //   dispay = dispay + this.znak
    return dispay;
  }

  zmiana(num: number) {
    this.b = num;
  }

  zmiana2($event: MouseEvent) {
    this.b = 2;
  }

  zmiana3($event: MouseEvent) {
    this.b = 3;
  }

  zmiana4($event: MouseEvent) {
    this.b = 4;
  }

  zmiana5($event: MouseEvent) {
    this.b = 5;
  }


  dodawanie($event: MouseEvent) {
    this.znak = "+";
    this.sum = this.sum + this.b;
  }

  zerowanie() {
    this.sum = 0;
    this.b = 0;
  }
}

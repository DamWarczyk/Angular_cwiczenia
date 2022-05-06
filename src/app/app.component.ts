import {Component, OnInit} from '@angular/core';
import {SumujService} from "./Klikacz/Servis/sumuj.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Cwiczenia';
  sum = 0;
  b!: number;
  znak!: string;
  klikacz= 0;



  constructor(private sumujserwis: SumujService) {

  }

  ngOnInit() {
    this.sumujserwis.getSuma().subscribe(dataKlikacz => {this.klikacz = dataKlikacz});
    this.sum =+ this.klikacz;
  }

  wyswietlanie():String {
    let dispay: String;
    dispay = this.sum.toString();
    // if (this.b =! undefined)
    //   dispay = dispay + this.znak
    return dispay;
  }

  dodajKliki(){
    console.log(this.klikacz);
    this.sum = this.sum + this.klikacz;
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

import { Component, OnInit } from '@angular/core';
import {SumujService} from "../Servis/sumuj.service";

@Component({
  selector: 'app-klikacz',
  templateUrl: './klikacz.component.html',
  styleUrls: ['./klikacz.component.css']
})
export class KlikaczComponent implements OnInit {

  constructor(private sumujserwis: SumujService) { }

  ngOnInit(): void {
  }

  onClick() {
  this.sumujserwis.addCliks();
  }
}

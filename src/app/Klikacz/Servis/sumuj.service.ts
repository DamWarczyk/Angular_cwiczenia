import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SumujService {

  private suma = 0;
  private sumuj = new Subject<number>();


  addCliks(){
    this.suma = this.suma + 1;
    this.sumuj.next(this.suma);
  }

  getSuma(): Observable<number>{
    return this.sumuj.asObservable();
  }

}

import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {

  constructor() {
     const myObservable = of(1,2,3,4,5,6,8,9,10);
     const myObserver = {
      next:  (valore:number) => console.log(valore),
      error: (errore: Error) => console.log(errore),
      complete: () => console.log('Trasmissione terminata')
     }


     const subscription = myObservable.subscribe(myObserver);
     //  subscription.unsubscribe();
  }



}

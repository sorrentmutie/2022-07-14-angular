import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject$: Subject<Customer> | undefined = undefined;
  customersObservable$: Observable<Customer> | undefined = undefined;
  private localInterval: any;

  constructor() {
      this.subject$ = new Subject();
      this.customersObservable$ = this.subject$.asObservable();
  }

  start() {
    this.localInterval = setInterval( () => {
      const nuovoCustomer = {
          name: "name - " + Math.random(),
          city: "city - " + Math.random()
      };
      this.subject$?.next(nuovoCustomer);
    }  , 2000)
  }

  stop(){
    clearInterval(this.localInterval);
  }

}

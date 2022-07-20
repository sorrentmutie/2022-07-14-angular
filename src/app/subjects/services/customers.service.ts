import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersSubject$: Subject<Customer> | undefined = undefined;
  customersChanged$: Observable<Customer> | undefined = undefined;
  lastCustomer: Customer | undefined;

  addCustomer(newCustomer: Customer) {
    this.customersSubject$?.next(newCustomer);
    this.lastCustomer = newCustomer;
  }

  constructor() {
      this.customersSubject$ = new Subject();
      this.customersChanged$ = this.customersSubject$.asObservable();
  }
}

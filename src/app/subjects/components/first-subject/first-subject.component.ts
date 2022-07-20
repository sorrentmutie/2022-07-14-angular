import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../models/customer';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-first-subject',
  templateUrl: './first-subject.component.html',
  styleUrls: ['./first-subject.component.css']
})
export class FirstSubjectComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  subscription: Subscription | undefined = undefined;

  constructor(private service: SubjectService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
   this.subscription =  this.service.customersObservable$?.subscribe( nuovoCustomer => {
       this.customers.push(nuovoCustomer);
    });
  }

  onStart(): void {
     this.service.start();
  }

  onStop(): void {
    this.service.stop();
 }


}

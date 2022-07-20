import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { Customer } from 'src/app/subjects/models/customer';
import { Events } from 'src/app/subjects/models/enums';
import { SubjectService } from 'src/app/subjects/services/subject.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  lastCustomer: Customer | undefined = undefined;
  subscription: Subscription | undefined = undefined;
  eventBusSubscription: Subscription | undefined;

  constructor(private service: SubjectService, private eventBus: EventBusService) {
   }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.eventBusSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.customersObservable$?.subscribe( nuovoCustomer => {
       this.lastCustomer = nuovoCustomer;
    });

   this.eventBusSubscription  = this.eventBus.on(Events.CustomerAdded,
       (customer: Customer) => this.lastCustomer = customer);


    // this.service.subject$?.next({name: 'pippo', city: 'napoli'});
   // this.service.start();
  }

}

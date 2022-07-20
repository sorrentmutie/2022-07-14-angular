import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { Customer } from '../../models/customer';
import { Events } from '../../models/enums';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnDestroy {

  customers: Customer[] = [];
  subscription: Subscription | undefined = undefined;
  constructor(private eventBus: EventBusService) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.eventBus.on(Events.CustomerAdded, (customer: Customer) => this.customers.push(customer));
  }

}

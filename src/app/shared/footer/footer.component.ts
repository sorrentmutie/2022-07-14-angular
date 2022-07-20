import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/subjects/models/customer';
import { Events } from 'src/app/subjects/models/enums';
import { CustomersService } from 'src/app/subjects/services/customers.service';
import { ApplicationNotification } from '../models/notification';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  customerName: string = "";
  notification: ApplicationNotification | undefined = undefined;

  constructor(private eventBus: EventBusService, private customersService: CustomersService) { }

  ngOnInit(): void {

    this.customersService.customersChanged$?.subscribe(
      customer => this.customerName = customer.name
    )

    // this.eventBus.on(Events.CustomerRemoved, (customerRemoved: Customer) => {
    //   this.customerName = customerRemoved.name;
    // });

   // this.eventBus.on(Events.HttpResponseArrived, (notification: ApplicationNotification) => {
   //    this.notification = notification;
  //  });

  }

}

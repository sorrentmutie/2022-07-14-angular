import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-observable-service',
  templateUrl: './observable-service.component.html',
  styleUrls: ['./observable-service.component.css']
})
export class ObservableServiceComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

  addCustomer() {
    const customer: Customer = { name: 'name-' + Math.random() , city: 'Rome' };
    this.customersService.addCustomer(customer);
  }

}

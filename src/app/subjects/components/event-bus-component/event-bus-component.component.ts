import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { EmitEvent, Events } from '../../models/enums';

@Component({
  selector: 'app-event-bus-component',
  templateUrl: './event-bus-component.component.html',
  styleUrls: ['./event-bus-component.component.css']
})
export class EventBusComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit(): void {
  }

  emetti() {


   setInterval( () => {
    const newCustomer = {name: Math.random(), city: 'Naples'}
    this.eventBus.emit(
      new EmitEvent(Events.CustomerAdded, newCustomer));
   },2000)


  }

  rimuovi(){
    const newCustomer = {name: 'Luigi', city: 'Naples'}
    this.eventBus.emit(
      new EmitEvent(Events.CustomerRemoved, newCustomer));
  }

}

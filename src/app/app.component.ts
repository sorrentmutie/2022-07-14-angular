import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { EventBusService } from './shared/services/event-bus.service';
import { Events } from './subjects/models/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  numero = 42;

  constructor(private spinner: NgxSpinnerService, private eventBus: EventBusService){
    this.eventBus.on(Events.HttpRequestStarted, () => this.spinner.show());
    this.eventBus.on(Events.HttpResponseArrived, () => this.spinner.hide());
  }

  changeInput() {
    this.numero = 50;
  }
}

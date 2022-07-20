import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Events } from 'src/app/subjects/models/enums';
import { ApplicationNotification } from '../models/notification';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-browser-notification',
  templateUrl: './browser-notification.component.html',
  styleUrls: ['./browser-notification.component.css']
})
export class BrowserNotificationComponent implements OnInit {

  constructor(private toastr: ToastrService, private eventBus: EventBusService ) { }

  ngOnInit(): void {
    this.eventBus.on(Events.HttpResponseArrived, (notification: ApplicationNotification) => {
      switch(notification.statusCode) {
        case 200:
        default:
          this.toastr.success(notification.message, "OK");
          break;
        case 404:
          this.toastr.warning(notification.message, "Non disponibile");
          break;
        case 0:
            this.toastr.error(notification.message, "Errore");
            break;
      }


  });
  }

}

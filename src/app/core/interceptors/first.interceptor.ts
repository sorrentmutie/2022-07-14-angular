import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { ApplicationNotification } from 'src/app/shared/models/notification';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { EmitEvent, Events } from 'src/app/subjects/models/enums';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token = 'xxxxxx';
  constructor(private eventBus: EventBusService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    this.eventBus.emit(new EmitEvent(Events.HttpRequestStarted, null));

    console.log('Sono nell\'interceptor A');

    let clonedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token)
    });


    console.log(clonedRequest);
    console.log('Sto uscendo dall\'interceptor A');
    return next.handle(clonedRequest).pipe(
      tap( (evento: HttpEvent<unknown>)  => {
         if(evento instanceof HttpResponse){

          const notification: ApplicationNotification = {
            statusCode: evento.status,
            message: "La chiamata ha restituito una response corretta",
            url: evento.url
          };

          this.eventBus.emit(new EmitEvent(Events.HttpResponseArrived, notification));

          console.log('Sono nella pipe del primo interceptor');
          console.log(evento);
         }
      }),
      catchError((errore: HttpErrorResponse) => {
        console.log(errore);

        const notification: ApplicationNotification = {
          statusCode: errore.status,
          message: errore.statusText,
          url: errore.url
        };

        this.eventBus.emit(new EmitEvent(Events.HttpResponseArrived, notification));


        return throwError(() => new Error('allarme'));
      } )
    );
  }
}

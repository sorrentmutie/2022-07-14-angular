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

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token = 'xxxxxx';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Sono nell\'interceptor A');

    let clonedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.token)
    });


    console.log(clonedRequest);
    console.log('Sto uscendo dall\'interceptor A');
    return next.handle(clonedRequest).pipe(
      tap( (evento: HttpEvent<unknown>)  => {

         if(evento instanceof HttpResponse){
          console.log('Sono nella pipe del primo interceptor');
          console.log(evento);
         }
      }),
      catchError((errore: HttpErrorResponse) => {
        console.log(errore);
        return throwError(() => new Error('allarme'));
      } )
    );
  }
}

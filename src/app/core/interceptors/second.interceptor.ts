import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Sono nell\'interceptor B');

    if(!request.headers.has('Content-Type')){
      const clonedRequest = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
      console.log(clonedRequest);
      console.log('Sto uscendo dall\'interceptor B');
      return next.handle(clonedRequest);
    }

    console.log(request);
    console.log('Sto uscendo dall\'interceptor B');
    return next.handle(request);
  }
}

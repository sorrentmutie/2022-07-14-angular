import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  logout(): void {
    this.isLogged = false;
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap( x => this.isLogged = true)
    )
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUserResponse } from '../models/random-users';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private http: HttpClient) { }

  getData() : Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>(environment.urlRandomUsers);
  }

}

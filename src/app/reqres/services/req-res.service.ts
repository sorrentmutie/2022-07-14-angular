import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqRes, ReqResPostRequest, ReqResPostResponse } from '../models/reqres';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {

  constructor(private httpClient: HttpClient) { }
  getData() : Observable<ReqRes> {
      return this.httpClient.get<ReqRes>(environment.urlReqRes);
  }

  postData(newUser: ReqResPostRequest): Observable<ReqResPostResponse> {
    return this.httpClient.post<ReqResPostResponse>(environment.urlReqRes, newUser);
  }


}

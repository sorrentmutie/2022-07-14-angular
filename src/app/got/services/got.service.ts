import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Episode } from '../models/episode';
import { Season } from '../models/season';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private httpClient: HttpClient) { }

  getSeasons(): Observable<Season[]> {
     return this.httpClient.get<Season[]>(environment.urlSeasons);
  }

  getEpisodes(seasonId: number): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(environment.urlEpisodes + seasonId);
  }

}

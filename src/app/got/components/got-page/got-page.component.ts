import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Episode } from '../../models/episode';
import { Season } from '../../models/season';
import { GotService } from '../../services/got.service';

@Component({
  selector: 'app-got-page',
  templateUrl: './got-page.component.html',
  styleUrls: ['./got-page.component.css']
})
export class GotPageComponent implements OnInit {

  gotGroup: FormGroup | undefined = undefined;
  seasons$: Observable<Season[]> | undefined = undefined;
  episodes$: Observable<Episode[]> | undefined = undefined;

  constructor(private formBuilder: FormBuilder, private service: GotService) {
    this.gotGroup = formBuilder.group(
      {
        season: ['', [Validators.required]],
        episode_choosen: ['', []]
      });

    this.gotGroup.get('season')?.valueChanges.subscribe
     ((selectedSeason: number) =>{
      const episodeControl = this.gotGroup?.get('episode_choosen');
      if(selectedSeason) {
        this.episodes$ = this.service.getEpisodes(selectedSeason);
        episodeControl?.setValidators(Validators.required);
      } else {
        episodeControl?.setValidators(null);
      }
      episodeControl?.updateValueAndValidity();
     });

   }

  ngOnInit(): void {
    this.seasons$ = this.service.getSeasons();
  }

}

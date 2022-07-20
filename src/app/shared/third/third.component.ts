import { HttpClient } from '@angular/common/http';
import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, Observable, of, pipe } from 'rxjs';
import { catchError, debounceTime, map, mergeAll, mergeMap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from './post';

@Component({
  selector: 'app-third',
  template: `
     <input [formControl]="myInput">
     <div *ngIf="posts$ | async as myposts">
      <h1>Ci sono {{myposts.length}} posts</h1>
      <ul>
        <li *ngFor="let post of myposts">{{post.id}} {{post.title}}<li>
      </ul>
     </div>
  `
})
export class ThirdComponent  {

  posts$: Observable<Post[]> | undefined = undefined;
  myInput: FormControl = new FormControl();

  constructor(private httpClient: HttpClient) {
    //  const srcArray =  from([1,2,'A',4]);
    //  srcArray
    //  .pipe(
    //     map(valore => {
    //       let result = valore as number * 2;
    //       if(Number.isNaN(result)) {
    //        console.log('Errore nello stream');
    //        throw new Error('Risultato è NaN');
    //       }
    //       return result;
    //   }),
    //   catchError(errore => {
    //     console.log('Sono in catchError');
    //     console.log(errore);
    //     return of(-1);
    //   })
    //  )
    //  .subscribe(
    //       x => console.log(x),
    //       errore => console.log('Errore preso nella subscribe ' + errore),
    //       () => console.log('Processamento completo'));
       // map ( id => this.httpClient.get<Post[]>(environment.urlPlaceholder + "?userId=" + id)),
       // mergeAll()



      this.posts$ = this.myInput.valueChanges.pipe(
          debounceTime(3000),
          mergeMap( id => this.httpClient.get<Post[]>(environment.urlPlaceholder + "?userId=" + id)))
      ;


   // this.posts$ = this.httpClient.get<Post[]>(environment.urlPlaceholder);

   }


}

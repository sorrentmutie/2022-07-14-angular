import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, merge, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, User } from '../third/post';
import { interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeWhile} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  posts$: Observable<Post[]> | undefined = undefined;
  users$: Observable<User[]> | undefined = undefined;
  myInput: FormControl = new FormControl();
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.posts$ = this.httpClient.get<Post[]>(environment.urlPlaceholder);
    this.users$ = this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');


    const myInput$ = this.myInput.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    );
    const myInterval$ = interval(1000).pipe(takeWhile(v => v < 5));

    const myMerge$ = combineLatest(
      myInput$, this.posts$, this.users$);

    myMerge$.subscribe(x => {
      console.log('inizio subscribe');
      console.log(x);
      console.log('fine subscribe');
  });
}

}

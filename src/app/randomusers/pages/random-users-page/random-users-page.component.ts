import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Result } from '../../models/random-users';
import { RandomUsersService } from '../../services/random-users.service';

@Component({
  selector: 'app-random-users-page',
  templateUrl: './random-users-page.component.html',
  styleUrls: ['./random-users-page.component.css']
})
export class RandomUsersPageComponent implements OnInit, OnDestroy {

  users: Result[] = [];
  subscription: Subscription | undefined = undefined;

  constructor(private service: RandomUsersService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.getData().subscribe( response => this.users = response.results );
  }
}

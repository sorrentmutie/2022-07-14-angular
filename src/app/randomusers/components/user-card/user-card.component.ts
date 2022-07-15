import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../models/random-users';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: Result | undefined = undefined;
}

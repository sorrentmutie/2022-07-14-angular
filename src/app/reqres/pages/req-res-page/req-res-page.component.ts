import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReqRes } from '../../models/reqres';
import { ReqResService } from '../../services/req-res.service';

@Component({
  selector: 'app-req-res-page',
  templateUrl: './req-res-page.component.html',
  styleUrls: ['./req-res-page.component.css']
})
export class ReqResPageComponent implements OnInit, OnDestroy {

  response  : ReqRes | undefined = undefined;
  subscription: Subscription | undefined = undefined;
  constructor(private service: ReqResService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.getData().subscribe(data => this.response = data);
  }

}

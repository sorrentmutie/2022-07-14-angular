import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReqResPostRequest, ReqResPostResponse } from '../../models/reqres';
import { ReqResService } from '../../services/req-res.service';

@Component({
  selector: 'app-req-res-form',
  templateUrl: './req-res-form.component.html',
  styleUrls: ['./req-res-form.component.css']
})
export class ReqResFormComponent implements OnDestroy {

  user: ReqResPostRequest = new ReqResPostRequest('','');
  subscription: Subscription | undefined = undefined;
  constructor(private router: Router, private service: ReqResService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit() {
     this.subscription = this.service.postData(this.user).subscribe(
      (response: ReqResPostResponse) => {
        console.log(response);
        this.router.navigate(['/products']);
      });
  }

}

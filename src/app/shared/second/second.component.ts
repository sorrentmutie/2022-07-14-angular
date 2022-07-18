import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { MyValidator } from 'src/app/core/validators/my-validator';
import { ReqResPostRequest } from 'src/app/reqres/models/reqres';
import { ReqResService } from 'src/app/reqres/services/req-res.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {


  myForm: FormGroup | undefined = undefined;

  constructor(private router: Router, private formBuilder: FormBuilder, private service: ReqResService) {
     this.myForm = formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4), MyValidator]],
        job: ['', [Validators.required]]
     });
  }

  onSubmit(): void {
    console.log('xssssss');
    console.log(this.myForm?.value.name);
    const data = new ReqResPostRequest(
      this.myForm?.get('name')?.value,
      this.myForm?.get('job')?.value,
    );

    this.service.postData(data).subscribe(
      x => {
        console.log(x);
       // this.router.navigate(['/products']);
      });

    console.log(this.myForm);
  }

  get name() {return this.myForm?.get('name')}
  get job() {return this.myForm?.get('job')}




}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  constructor(private router: Router, private authService: AuthService) { }

  login(){
    this.authService.login().subscribe( loggedIn =>
      console.log('Sono loggato'));
  }

  logout(){
    this.authService.logout();
  }

  navigate() {
     this.router.navigate(['/reqres']);
  }

}

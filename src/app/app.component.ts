import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  numero = 42;
  
  changeInput() {
    this.numero = 50;
  }
}

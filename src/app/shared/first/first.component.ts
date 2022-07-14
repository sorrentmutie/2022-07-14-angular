import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {
  title: string = "titolo di prova" ;
  subTitle: string | undefined = undefined;
  subSubTitle = "sub sub titolo";
  numberOfVisits = 5;

  getTitle(): string {
    return "Salvatore";
  }


}

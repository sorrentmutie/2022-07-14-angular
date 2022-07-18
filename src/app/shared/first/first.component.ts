import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, filter, map, Observable, range, timer } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnChanges  {
  title: string = "titolo di prova" ;
  subTitle: string | undefined = undefined;
  subSubTitle = "sub sub titolo";
  numberOfVisits = 5;

  @Input() valoreInput: number = 0;
  valoreCalcolato: number = 0;

  constructor(private router: Router, private service: ProductsService){

       const sorgente$: Observable<number> =  range(0,10);
       sorgente$.pipe(
           map(x => x * 3),
           filter( x => x % 2 === 0 )
       ).subscribe(n => console.log(n));

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['valoreInput'].currentValue);
    this.valoreCalcolato = changes['valoreInput'].currentValue * 3 ;
    console.log(changes);
  }

  getTitle(): string {
    return "Salvatore";
  }

  navigate(): void {
     this.router.navigate(['/products']);
  }


}

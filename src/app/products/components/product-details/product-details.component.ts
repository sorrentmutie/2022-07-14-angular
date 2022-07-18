import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy  {

  product: Product | undefined = undefined;
  subscription: Subscription | undefined = undefined;

  constructor(private router: Router, private route: ActivatedRoute, private service: ProductsService){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
     this.subscription  =  this.service.getProductById(id).subscribe(prod => this.product = prod);
    }
  }
  ngOnDestroy(): void {
    console.log('sono in unsubscribe');
    this.subscription?.unsubscribe();
  }
  goback() {
    this.router.navigate(['/products']);
  }

}

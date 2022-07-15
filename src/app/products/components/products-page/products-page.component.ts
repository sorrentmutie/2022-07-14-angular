import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productsToBeOrdered: Product[] | undefined = undefined;
  selectedProduct: Product | undefined;
  subscriptionProducts: Subscription | undefined = undefined;
  subscriptionProductsToBeOrdered: Subscription | undefined = undefined;

  constructor(private service: ProductsService) {
  }
  ngOnDestroy(): void {
      this.subscriptionProducts?.unsubscribe();
      this.subscriptionProductsToBeOrdered?.unsubscribe();
  }
  ngOnInit(): void {
    this.subscriptionProducts = this.service.getProductsFromApi().subscribe(x => this.products = x);
    this.subscriptionProductsToBeOrdered = this.service.getProductsToBeOrderedAsObservable().subscribe(y => this.productsToBeOrdered = y);
  }

  notifyProducts(payload: Product): void {
    // alert(payload.description);
    this.selectedProduct = payload;
  }

  notifyProductsToBeOrdered(payload: Product): void {
    alert(payload.description);
 }

 showTable(){
  this.selectedProduct = undefined;
 }

}

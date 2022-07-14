import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  products: Product[] = [];
  productsToBeOrdered: Product[] | undefined = undefined;
  selectedProduct: Product | undefined;
  constructor() {
    this.products = this.getProducts();
    this.productsToBeOrdered = this.getProductsToBeOrdered();
  }

  getProducts(): Product[] {
    return [
      { id: 1, name: "Frigorifero", price: 1000,
      code: 100,
      description: "descrizione 1",
      releaseDate : new Date(),
      image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      { id: 2, name: "Frigorifero Speciale", price: 1200,
      code: 200,
      description: "descrizione 2",
      releaseDate : new Date(),
      image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }
    ];
  }

  getProductsToBeOrdered(): Product[] {
    return [
      { id: 3, name: "Frigorifero", price: 1000,
      code: 100,
      description: "descrizione 1",
      releaseDate : new Date(),
      image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      { id: 4, name: "Frigorifero Speciale", price: 1200,
      code: 200,
      description: "descrizione 2",
      releaseDate : new Date(),
      image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }
    ];
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

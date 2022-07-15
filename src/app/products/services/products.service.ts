import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { OffersService } from './offers.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private httpClient: HttpClient, private offers: OffersService){
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
      description: "descrizione 3",
      releaseDate : new Date(),
      image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      },
      { id: 4, name: "Frigorifero Speciale", price: 1200,
      code: 200,
      description: "descrizione 4",
      releaseDate : new Date(),
      image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
      }
    ];
  }

  getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
  }

  getProductsToBeOrderedAsObservable() : Observable<Product[]> {
    return of(this.getProductsToBeOrdered());
  }

  getProductsFromApi(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.urlProducts);
  }


}

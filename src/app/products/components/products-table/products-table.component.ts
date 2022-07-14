import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent{
  @Input() products: Product[] = [];
  @Input() title: string = "Numero totale Prodotti";
  @Output() notify: EventEmitter<Product> = new EventEmitter();

  showDetails(selectedProduct: Product): void {
   this.notify.emit(selectedProduct);
  }
}

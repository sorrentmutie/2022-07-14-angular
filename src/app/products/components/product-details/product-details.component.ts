import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() product: Product | undefined = undefined;
  @Output() gobacknotify: EventEmitter<void> = new EventEmitter()

  goback() {
    this.gobacknotify.emit();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-webcart-item',
  templateUrl: './webcart-item.component.html',
  styleUrls: ['./webcart-item.component.scss']
})
export class WebcartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  removeFromBasket(): void {
    this.delete.emit(this.product);
    console.log('Deletings')
  }

}

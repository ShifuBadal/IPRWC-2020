import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

  onBasketClick(): void {
    console.log('Basket clicked');
  }

  onHeartClick(): void {
    console.log('Heart clicked');
  }

  onShareClick(): void {
    console.log('Share clicked');
  }

}

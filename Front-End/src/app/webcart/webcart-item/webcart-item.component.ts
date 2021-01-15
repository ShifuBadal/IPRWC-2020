import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-webcart-item',
  templateUrl: './webcart-item.component.html',
  styleUrls: ['./webcart-item.component.scss']
})
export class WebcartItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}

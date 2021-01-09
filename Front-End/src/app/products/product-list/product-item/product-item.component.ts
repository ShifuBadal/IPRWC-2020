import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onBasketClick(): void {
    console.log('Basket clicked');
    this.productService.productSelected.emit(this.product);
  }

  onHeartClick(): void {
    console.log('Heart clicked');
  }

  onShareClick(): void {
    console.log('Share clicked');
  }

}

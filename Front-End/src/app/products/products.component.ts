import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products = [];
  selectedProduct: Product;
  productSelectedSubscription = new Subscription();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSelectedSubscription = this.productService.productSelected
    .subscribe((product: Product) => {
      this.selectedProduct = product;
    });
  }

  ngOnDestroy(): void {
    this.productSelectedSubscription.unsubscribe();
  }

}

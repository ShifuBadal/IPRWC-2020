import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onBasketClick(): void {
    console.log('Basket clicked');
    this.productService.productSelected.next(this.product);
    this.router.navigate(['/collection/product/', this.product.id])
      .catch(() => {
        throw new Error('Could not nav to productdetails');
      });
  }

  onHeartClick(): void {
    console.log('Heart clicked');
  }

  onShareClick(): void {
    console.log('Share clicked');
  }

}

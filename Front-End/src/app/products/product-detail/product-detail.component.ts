import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';
import { WebcartService } from 'src/app/webcart/webcart.service';
// import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id: number;

  isSizeButtonClicked = false;
  whatSizeButtonClicked: number;
  isColorButtonClicked = false;
  whatColorButtonClicked: string;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService,
              private webcartService: WebcartService,
              private router: Router) {}



  ngOnInit(): void {
    this.route.params.subscribe((params: Params ) => {
      this.id = params.id;
      this.product = this.productService.fetchById(this.id);
      // console.log(this.id);
      // console.log(this.product.name);
    });
  }

  toggleSizeBtns(size): void {
    this.isSizeButtonClicked = !this.isSizeButtonClicked; // Toggle for styling :D
    this.whatSizeButtonClicked = size; // Send this to winkelmandje ;)
  }

  sendToBasket(): void {
    let basketProduct = this.product
    basketProduct.sizes = [this.whatSizeButtonClicked]
    this.webcartService.setProduct(basketProduct);
  }

  toCollection(): void {
    this.router.navigate(['/collection'])
  }

}

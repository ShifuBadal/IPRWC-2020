import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products/product.model';
import { WebcartService } from './webcart.service';

@Component({
  selector: 'app-webcart',
  templateUrl: './webcart.component.html',
  styleUrls: ['./webcart.component.scss']
})
export class WebcartComponent implements OnInit {
  @Input() product: Product;
  products: Product[];
  totalArticlesCosts = 0;
  totalOverallCosts = 0;
  deliveryCosts = 0;

  constructor(private webCartService: WebcartService,
              private router: Router) { }

  ngOnInit(): void {
    this.products = this.webCartService.getProducts();
    this.webCartService.productsObservable
      .subscribe((products) => {
        this.products = products;
      });  
    this.checkPrices(this.products);
  }

  emptyArray(): void {
    this.webCartService.remAllProducts();
    this.totalArticlesCosts = 0;
    this.totalOverallCosts = 0;
    this.deliveryCosts = 0;
  }

  navigateToCollection(): void {
    this.router.navigate(['/collection']);
  }

  checkPrices(products: Product[]): void {
    products.forEach(product => {
      this.totalArticlesCosts += product.price;
      this.totalOverallCosts = this.deliveryCosts + this.totalArticlesCosts;
      this.roundPrices();
    });
  }

  deleteProduct(product: Product): void {
    const productArray = this.products.filter(x => x !== product);
    
    if (productArray === null) {
      this.totalArticlesCosts = 0;
      this.totalOverallCosts = 0;
    } else {
      this.totalArticlesCosts -= product.price;
      this.totalOverallCosts = this.deliveryCosts + this.totalArticlesCosts;
      this.roundPrices();
    }
    this.webCartService.localStorageRemove();  
    this.webCartService.setProducts(productArray);
   
  }

  roundPrices(): void {
    this.totalArticlesCosts =  Math.round(this.totalArticlesCosts * 100) / 100
    this.totalOverallCosts =  Math.round(this.totalOverallCosts * 100) / 100
  }
}

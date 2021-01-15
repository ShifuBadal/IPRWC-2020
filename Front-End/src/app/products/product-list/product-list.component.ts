import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/services/date-storage.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() product: Product;
  products: Product[];

  constructor(private productService: ProductService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.getProducts();
    this.products = this.productService.getProducts();
    this.productService.treesChanged
      .subscribe((products) => {
        this.products = products;
      });
    // this.postAProduct(); // Only use when all products are fucked in db
  }

  postAProduct() {
    // Only use when all products are fucked in db
    this.dataStorageService.storeProduct('Triple S Sneaker', 'Balenciaga', 477 , '/assets/images/balenciaga_shoe_tp.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
    this.dataStorageService.storeProduct('Waterbury Watch', 'Timex', 109.95 , '/assets/images/klok.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
    this.dataStorageService.storeProduct('Random Adidas shoe', 'Mason', 9.99 , '/assets/images/mason.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
    this.dataStorageService.storeProduct('Torino sneakers', 'Tommy Hilfiger', 99.99 , '/assets/images/tommy_hilfigger_nobg.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
    this.dataStorageService.storeProduct('Swimming shorts', 'Daily Paper', 70 , '/assets/images/dp_swimmingshorts_nobg.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
    this.dataStorageService.storeProduct('Big Ow Hoodie', 'Off-White', 405 , '/assets/images/offwhite_hoodie_nobg.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
    this.dataStorageService.storeProduct('Regular Fit overhemd', 'Versace', 995 , '/assets/images/versace_hemd_nobg.png', [39, 40, 41, 42]).subscribe((responsedata) => {console.log(responsedata);});
  }

  getProducts() {
    this.dataStorageService.fetchProducts()
        .then((productsFromDB) => {
            this.productService.setTrees(productsFromDB);
        });
  }
}

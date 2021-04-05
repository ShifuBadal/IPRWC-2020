import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/product.model';
import {ProductService} from '../../../products/product.service';
import {DataStorageService} from '../../../services/date-storage.service';

@Component({
  selector: 'app-manageable-product-list',
  templateUrl: './manageable-product-list.component.html',
  styleUrls: ['./manageable-product-list.component.scss']
})
export class ManageableProductListComponent implements OnInit {
  @Input() product: Product;
  products: Product[];

  constructor(private productService: ProductService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.products = this.productService.getProducts();
    this.productService.productsChanged
      .subscribe((products) => {
        this.products = products;
      });
  }

  fetchProducts(): void{
    this.dataStorageService.fetchProducts()
      .then((productsFromDB) => {
        this.productService.setProducts(productsFromDB);
      });
  }
}

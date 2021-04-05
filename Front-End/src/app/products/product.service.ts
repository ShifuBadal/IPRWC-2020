import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    productSelected = new EventEmitter<Product>();
    productsChanged = new Subject<Product[]>();
    private products: Product[] = [];


    getProducts(): Product[] {
        return this.products.slice();
    }

    fetchById(id: number): Product {
      return this.products.find(x => x.id === id);
    }

    setProducts(products: Product[]): void {
        this.products = products;
        this.productsChanged.next(this.products);
	  }
}

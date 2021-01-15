import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    productSelected = new EventEmitter<Product>();
    treesChanged = new Subject<Product[]>();
    private products: Product[] = [];


    getProducts(): Product[] {
        return this.products.slice();
    }

    fetchById(id: Number): Product {
      return this.products.find(x => x.id === id);
    }

    setTrees(products: Product[]): void {
        this.products = products;
        this.treesChanged.next(this.products)
	}
}

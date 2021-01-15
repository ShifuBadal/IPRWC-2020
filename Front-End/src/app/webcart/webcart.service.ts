import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../products/product.model";

@Injectable({providedIn: 'root'})
export class WebcartService {
    
    productsObservable = new Subject<Product[]>();
    private products: Product[] = [];

    getProducts(): Product[] {
        this.localStorageGet(this.products);
        return this.products.slice();
        
    }

    setProduct(product: Product): void {
        this.products.push(product);
        this.productsObservable.next(this.products);
        this.localStorageSave()
    }

    remAllProducts(): void {
        this.localStorageRemove();
        this.products = [];
        this.productsObservable.next(this.products);
    }

    localStorageSave(): void {
        localStorage.setItem('cart', JSON.stringify(this.products));
    }

    localStorageGet(product: Product[]): void {
        if(localStorage.getItem('cart') === null) {
            return
        } else {
            product.push(this.products = JSON.parse(localStorage.getItem('cart')));
        }
    }

    localStorageRemove(): void {
        localStorage.removeItem('cart');
    }
}
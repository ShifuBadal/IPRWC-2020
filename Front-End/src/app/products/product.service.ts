import { EventEmitter } from '@angular/core';
import { Product } from './product.model';

export class ProductService {
    productSelected = new EventEmitter<Product>();

    private products: Product[] = [
        new Product(1, 'Triple S Sneaker', 'Balenciaga', '$477' , '/assets/images/balenciaga_shoe_tp.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product(2, 'Waterbury Watch', 'Timex', '$109,95' , '/assets/images/klok.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product(3, 'Random Adidas shoe', 'Mason', '$9.99' , '/assets/images/mason.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product(4, 'Torino sneakers', 'Tommy Hilfiger', '$99,99' , '/assets/images/tommy_hilfigger_nobg.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product(5, 'Swimming shorts', 'Daily Paper', '$70' , '/assets/images/dp_swimmingshorts_nobg.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product(6, 'Big Ow Hoodie', 'Off-White', '$405' , '/assets/images/offwhite_hoodie_nobg.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product(7, 'Regular Fit overhemd', 'Versace', '$995' , '/assets/images/versace_hemd_nobg.png', [39, 40, 41, 42],
          ['black', 'white'])
    ];


    getProducts(): Product[] {
        return this.products.slice();
    }

    fetchById(id: number): Product {
      return this.products[id - 1];
    }
}

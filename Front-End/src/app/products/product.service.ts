import { EventEmitter } from '@angular/core';
import { Product } from './product.model';

export class ProductService {
    productSelected = new EventEmitter<Product>();

    private products: Product[] = [
        new Product('Triple S Sneaker', 'Balenciaga', '$477' , '/assets/images/balenciaga_shoe_tp.png', [39, 40, 41, 42],
          ['black', 'white', 'red', 'blue']),
        new Product('Waterbury Watch', 'Timex', '$109,95' , '/assets/images/klok.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product('Random Adidas shoe', 'Mason', '$9.99' , '/assets/images/mason.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product('Torino sneakers', 'Tommy Hilfiger', '$99,99' , '/assets/images/tommy_hilfigger_nobg.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product('Swimming shorts', 'Daily Paper', '$70' , '/assets/images/dp_swimmingshorts_nobg.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product('Big Ow Hoodie', 'Off-White', '$405' , '/assets/images/offwhite_hoodie_nobg.png', [39, 40, 41, 42],
          ['black', 'white']),
        new Product('Regular Fit overhemd', 'Versace', '$995' , '/assets/images/versace_hemd_nobg.png', [39, 40, 41, 42],
          ['black', 'white'])
    ];


    getProducts(): Product[] {
        return this.products.slice();
    }
}

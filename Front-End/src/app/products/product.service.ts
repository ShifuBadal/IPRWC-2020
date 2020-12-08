import { Product } from './product.model';

export class ProductService {
    private products: Product[] = [
        new Product('Nike aids max', 'Nike', 69.99 , '/assets/images/red_sneaker.png'),
        new Product('Nike aids max 1', 'Nike', 69.99 , '/assets/images/red_sneaker.png'),
        new Product('Nike aids max 1', 'Nike', 69.99 , '/assets/images/red_sneaker.png'),
        new Product('Nike aids max 1', 'Nike', 69.99 , '/assets/images/red_sneaker.png'),
        new Product('Nike aids max 1', 'Nike', 69.99 , '/assets/images/red_sneaker.png'),
        new Product('Nike aids max 1', 'Nike', 69.99 , '/assets/images/red_sneaker.png'),
    ];


    getProducts(): Product[] {
        return this.products.slice();
    }
}

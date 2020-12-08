import { Product } from './product.model';

export class ProductService {
    private products: Product[] = [
        new Product('Nike aids max', 'Nike', '$69.69' , '/assets/images/red_sneaker.png'),
        new Product('Maybe fake dunno', 'Supreme?', '$169.99' , '/assets/images/fakeshit.png'),
        new Product('Random Adidas shoe', 'Adidas', '$9.99' , '/assets/images/adidasshoe.png'),
        new Product('Epic sliders XD!', 'DSquared 2', '$369.69' , '/assets/images/dsquaredsliders.png')
    ];


    getProducts(): Product[] {
        return this.products.slice();
    }
}

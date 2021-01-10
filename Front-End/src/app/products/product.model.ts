export class Product {
    public name: string;
    public brand: string;
    public price: string;
    public imagePath: string;
    public sizes: Array<number>;
    public colors: Array<string>;

    constructor(name: string, brand: string, price: string, imagePath: string, sizes: Array<number>, colors: Array<string>) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.imagePath = imagePath;
        this.sizes = sizes;
        this.colors = colors;
    }
}

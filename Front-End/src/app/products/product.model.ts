export class Product {
    public name: string;
    public brand: string;
    public price: string;
    public imagePath: string;

    constructor(name: string, brand: string, price: string, imagePath: string) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.imagePath = imagePath;
    }
}

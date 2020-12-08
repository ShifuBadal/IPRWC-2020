export class Product {
    public name: string;
    public brand: string;
    public price: number;
    public imagePath: string;

    constructor(name: string, brand: string, price: number, imagePath: string) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.imagePath = imagePath;
    }
}

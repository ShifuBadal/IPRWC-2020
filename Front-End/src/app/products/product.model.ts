export class Product {
    public id: number;
    public name: string;
    public brand: string;
    public price: string;
    public imagePath: string;
    public sizes: Array<number>;

    constructor(id: number, name: string, brand: string, price: string, imagePath: string, sizes: Array<number>) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.imagePath = imagePath;
        this.sizes = sizes;
    }
}

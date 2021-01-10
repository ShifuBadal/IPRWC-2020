import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
// import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  id: number;

  isSizeButtonClicked = false;
  whatSizeButtonClicked: number;
  isColorButtonClicked = false;
  whatColorButtonClicked: string;

  constructor() {}



  ngOnInit(): void {

  }

  toggleColorBtns(color): void {
    this.isColorButtonClicked = !this.isColorButtonClicked;
    this.whatColorButtonClicked = color;
    console.log(this.whatColorButtonClicked);
  }

  toggleSizeBtns(size): void {
    this.isSizeButtonClicked = !this.isSizeButtonClicked; // Toggle for styling :D
    this.whatSizeButtonClicked = size; // Send this to winkelmandje ;)
  }
}

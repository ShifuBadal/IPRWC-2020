import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../products/product.model';
import {ProductService} from '../../../../products/product.service';

@Component({
  selector: 'app-manageable-product',
  templateUrl: './manageable-product.component.html',
  styleUrls: ['./manageable-product.component.scss']
})
export class ManageableProductComponent implements OnInit {

  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}

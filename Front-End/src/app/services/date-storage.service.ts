import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ProductService } from "../products/product.service";
import { GenericRequests } from "./generic-requests.service";


@Injectable({providedIn: 'root'})
export class DataStorageService{
    

    constructor(private genericRequests: GenericRequests,
                private productService: ProductService) {}

    storeProduct(name: String, brand: String, price: String, imagePath: String, sizes: [Number, Number, Number, Number]): Observable<String> {
        const body = {
            name,
            brand,
            price,
            imagePath,
            sizes
        }

        return this.genericRequests.sendPostRequest('products/create', body, false)
        .pipe(
			map((responseData: { message: string}) => {
				return responseData.message;
			})
		);
    }

}
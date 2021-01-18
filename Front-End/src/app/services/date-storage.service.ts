import { HttpClient } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "src/shared/user.model";
import { Product } from "../products/product.model";
import { ProductService } from "../products/product.service";
import { GenericRequests } from "./generic-requests.service";


@Injectable({providedIn: 'root'})
export class DataStorageService{
    private loggedUser: User = null;
    

    constructor(private genericRequests: GenericRequests,
                private productService: ProductService) {}

    storeProduct(name: String, brand: String, price: number, imagePath: String, sizes: [Number, Number, Number, Number]): Observable<String> {
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
                console.log(responseData.message);
				return responseData.message;
			})
		);
    }

    async fetchProducts(): Promise<any> {
        const promise = await this.genericRequests.sendGetRequest('products', false).toPromise()
        promise.map((products: Product[]) => {
                return products;
			}
        );
        return promise
    }

    getActiveUser(): User {
		return this.loggedUser;
	}

	setActiveUser(user: User): void {
		this.loggedUser = user;
	}

	logOut(): void {
	    this.loggedUser = null;
  }

}
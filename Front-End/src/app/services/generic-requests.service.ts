import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GenericRequests {
    dbAddress = 'http://localhost:3000/';

    constructor(private http: HttpClient,
    ) {}

    private static errorHandler(errorRes: HttpErrorResponse):Observable<any> {
        let error = 'Error occured';

        switch(errorRes.statusText) {
            case 'Unauthorized':
                error = 'Unauthorized';
                break;
        }
        return throwError(error)
    }
    
    sendPostRequest(urlPath: string, body: unknown, tokenRequired: boolean): Observable<any> {
    
		let authHeader = '';
		if (tokenRequired) {
			authHeader = 'Bearer '/* + this.fetchToken();*/;
		}

        return this.http
            .post<any>(this.dbAddress + urlPath, body, {headers: { Authorization: authHeader }, withCredentials: true})
			.pipe(catchError(GenericRequests.errorHandler));
    }
    
    sendGetRequest(urlPath: string, tokenRequired: boolean): Observable<any> {
        let authHeader = null;

        // TODO: Authorization :)

        const headers = new HttpHeaders({
			Authorization: '',
        });

        // if (tokenRequired) {
		// 	authHeader = 'Bearer ' + this.fetchToken();
		// 	userId = this.dataStorageService.getActiveUser().getId().toString();

		// 	options.headers = options.headers
		// 		.set('Authorization', authHeader)
		// 		.set('userID', userId);
		// }
        

        const options = { headers: headers };
        return this.http
			.get<any>(this.dbAddress + urlPath, options)
			.pipe(catchError(GenericRequests.errorHandler));
    }
}
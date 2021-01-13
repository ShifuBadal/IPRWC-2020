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
            .post<any>(this.dbAddress + urlPath, body, {headers: { Authorization: authHeader }})
			.pipe(catchError(GenericRequests.errorHandler));
	}
}
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GenericRequests {
    dbAddress = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    private generateHeader(): { headers: HttpHeaders; withCredentials: boolean} {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return {headers, withCredentials: true};
    }

    sendPostRequest(urlPath: string, body: unknown): Observable<any> {
      return this.http
        .post<any>(this.dbAddress + urlPath, body, this.generateHeader());
    }

    sendGetRequest(urlPath: string): Observable<any> {
      return this.http.get<any>(this.dbAddress + urlPath, this.generateHeader());
    }

    sendDeleteRequest(urlPath: string): Observable<any> {
        return this.http.delete<any>(this.dbAddress + urlPath, this.generateHeader());
    }
}

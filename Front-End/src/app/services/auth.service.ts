import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GenericRequests } from './generic-requests.service';
import { DataStorageService } from './date-storage.service';
import { tap } from 'rxjs/operators';
import { User } from 'src/shared/user.model';

export interface AuthResponseData {
  id: number;
  token: string;
  name: string,
  email: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  id: number;
  token: string;
  user: any;
  name: string;
  email: string;
  username: string;


  constructor(private http: HttpClient,
              private genericRequests: GenericRequests,
              private dataStorageService: DataStorageService) {}

  login(username: string, password: string) {

    const body: object = {
      username: username,
      password: password
    }

    return this.genericRequests.sendPostRequest('users/authenticate', body, false)
    .pipe(tap(responseData => {
      console.log(responseData);
      this.handleAuthentication(responseData);
    }));
  }

  handleAuthentication(userData: AuthResponseData) {
    const user = new User(
        userData.id,
        userData.token,
        userData.name,
        userData.email,
        userData.username
    );

    this.dataStorageService.setActiveUser(user)
    console.log(user.getToken())
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericRequests } from './generic-requests.service';
import { DataStorageService } from './date-storage.service';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/shared/user.model';

export interface AuthResponseData {
  id: number;
  token: string;
  name: string,
  email: string,
  username: string,
  role: string,
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  
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

  register(name: string, email: string, username: string, password: string, role: string) {
    const body = {
      name, 
      email,
      username,
      password,
      role
    }

    return this.genericRequests.sendPostRequest('users/register', body, false)
      .pipe(tap((responseData: {message: string, success: boolean}) => {
          return responseData.message, responseData.success;
        })
      );
  }

  handleAuthentication(userData: AuthResponseData) {
    this.dataStorageService.setActiveUser(userData.user)
  }
}

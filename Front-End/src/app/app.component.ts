import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './services/date-storage.service';
import {AuthService} from './services/auth.service';
import {User} from "../shared/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'product';
  title = 'Front-End';

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService){}

  ngOnInit(): void {
    this.refreshLogin();
  }

  refreshLogin(): void {
    this.authService.verifyUser()
      .subscribe((responseData) => {
        const user = new User(responseData.name, responseData.email, responseData.username, responseData.role);
        this.dataStorageService.setActiveUser(user);
      });
  }
}

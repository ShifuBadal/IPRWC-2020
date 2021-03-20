import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './services/date-storage.service';
import {AuthService} from './services/auth.service';

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
      .subscribe((user) => {
        this.dataStorageService.setActiveUser(user);
        console.log(this.dataStorageService.getActiveUser());
      });
  }
}

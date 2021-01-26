import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user.model';
import { DataStorageService } from '../services/date-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }
  user: User;

  ngOnInit(): void {
    this.dataStorageService.user
    .subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../shared/user.model';
import { DataStorageService } from '../services/date-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('burger') burger: ElementRef;
  isBurgerOpen: boolean;
  isTheNavOpen = new Subject<boolean>();

  constructor(private dataStorageService: DataStorageService) { }
  user: User;

  ngOnInit(): void {
    this.dataStorageService.user
    .subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  navSlide(): void {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.burger.nativeElement.classList.toggle('toggle');
  }

  closeNav(): void {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../shared/user.model';
import { AuthService } from '../services/auth.service';
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

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService,
              private router: Router) { }
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

 onLogoutClicked(): void {
    this.authService.logOut().subscribe(() => {
      this.dataStorageService.removeLoggedUser();
      this.router.navigate(['/home']);
    });
  }
}

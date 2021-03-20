import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../date-storage.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (this.dataStorageService.isLoggedIn()){
      return true;
    }
    return new Observable<boolean>((obs) => {
      this.authService.verifyUser().subscribe((resData) => {
        if (resData.user !== null) {
          obs.next(true);
        } else {
          obs.next(false);
          this.router.navigate(['/login']).then();
        }
      }, () => {
        obs.next(false);
        this.router.navigate(['/login']).then();
      });
    });
  }

}

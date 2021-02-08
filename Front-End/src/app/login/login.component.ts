import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/user.model';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/date-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
		          private dataStorageService: DataStorageService,
		          private router: Router) { }

  ngOnInit(): void {
    this.refreshLogin();
  }
  
  refreshLogin(): void {
    try{
      this.authService.verifyUser().subscribe((user: AuthResponseData) => {
        this.dataStorageService.setActiveUser(new User(user.id, user.name, user.username, user.email, user.role));
        console.log('Rat', user);
      });
    } catch (err) {
      this.router.navigate(['/login']);
    } 
  }
  onSubmit(form: NgForm): void {
    this.authService
      .login(form.value.username, form.value.password)
      .subscribe(() => {
        if(this.dataStorageService.getActiveUser()) {
          this.router.navigate(['/collection'])
            .catch(() => {
              throw new Error('Could not navigate');
            });
        }
      });
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}

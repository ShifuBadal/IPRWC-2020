import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Todo:
  // Email check in backend
  // Username check in backend
  // Repeat password check
  // Post user on register click: Done
  // Redirect to login if succeeded: Done



  onSubmit(form: NgForm): void {
    this.authService
      .register(form.value.name, form.value.email, form.value.username, form.value.password, 'user')
      .subscribe((responseData) => {
        if(responseData.success === true) {
          this.router.navigate(['/login'])
        } else {
          // Show error
          this.router.navigate(['/home'])
        }
      });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}

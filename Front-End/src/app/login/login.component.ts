import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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

  ngOnInit(): void {}

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

}

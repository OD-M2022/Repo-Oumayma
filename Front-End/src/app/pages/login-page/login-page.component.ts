import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  authenticationForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authService: AuthService,
  ) {
    this.authenticationForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      console.log("Already authenticated -> redirect to dashboard");
      //this.router.navigate(['pages/dashboard'])
    }
  }

  authenticate() {
    this.authService.authenticate(this.authenticationForm.value);
    this.authService.user.subscribe(user => {
      if (user) {
        if (user.role === Role.User) {
          this.router.navigate([`profile/edit`]);
        } else if (user.role === Role.Admin) {
          this.router.navigate([`employees/all-employees`]);
        }
      }
    })
  }

}

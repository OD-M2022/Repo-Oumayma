import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', Validators.email ],
      password: ['', Validators.required ],
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      console.log("Already authenticated -> redirect to dashboard");
      console.log(this.authService.userValue.role)
      //this.router.navigate(['pages/dashboard'])
    }
  }

  authenticate() {
    // stop here if form is invalid
     if (this.authenticationForm.invalid) {
         return;
     }

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

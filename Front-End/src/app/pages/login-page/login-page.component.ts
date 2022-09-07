import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import {Router} from '@angular/router'; // import router from angular router
import { LoginService } from 'src/Services/LoginService';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  employee : Employee
  constructor(private router:Router) {
   }

  ngOnInit() { }
onLogin(form: NgForm){
    const { username, password } = form.value
     const employee = {
      admin: false
    }
    if (username === '0001' && password === '01123652') {
      // redirect to admin
          employee.admin = true
          localStorage.setItem('Employee', JSON.stringify(employee));
         this.router.navigate(['/employees/all-employees']);
    } else {
          localStorage.setItem('Employee', JSON.stringify(employee));
          this.router.navigate(['/profile/edit']);
    }


  }
/*
  export class LoginPageComponent implements OnInit {
  defaultSection = 'dsen';
  myComment = 'Rien à signaler';
  invalide = false;

  employee : Employee
  constructor(private loginServ: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(identifiants) {

    this.loginServ.seConnecter(identifiants.value).subscribe(
      (response) => {
        localStorage.setItem('token', response['token']);
        this.router.navigateByUrl('/profile/edit');
        this.invalide = false;
      },
      (error) => {
        this.invalide = true;
        console.log(error);
      }
    );
  }
*/
  }

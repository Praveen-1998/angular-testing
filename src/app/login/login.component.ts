import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  login(form: NgForm) {
    console.log(form.value);
    this.auth.loginUser(form.value).subscribe(response => {
      // console.log(response);
      this.auth.message = response.message;
      setTimeout(() => {
        this.auth.message = null;
      }, 3000);
      if (response && response.registered) {
        localStorage.setItem('userDetails', JSON.stringify(response));
        this.router.navigateByUrl('/home');
      }
    }, err => {
      console.log(err);
      if (err.error.message === 'Invalid Password') {
        this.error = err.error.message;
      } else {
        this.auth.error = err.error.message;
      }
      if (this.auth.error === 'User not found. Please Register') {
        this.router.navigateByUrl('/register');
      }
      setTimeout(() => {
        this.auth.error = null;
        this.error = null;
      }, 5000);

    });
  }
}

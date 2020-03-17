import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  register(form: NgForm) {
      this.auth.registerUser(form.value).subscribe(res => {
      this.auth.message = res.message;
      setTimeout(() => {
        this.auth.message = null;
      }, 3000);
      this.router.navigateByUrl('/login');
    }, err => {
      this.auth.error = err.error.message;
      this.router.navigateByUrl('/login');
      setTimeout(() => {
        this.auth.error = null;
      }, 3000);
    });
  }
}

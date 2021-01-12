import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  errorLogin: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid) {
      this.validateLogin(this.form.value);
    }
  }

  private validateLogin(user: User) {
    if (user.username === 'curso' && user.password === 'angular'){
      this.errorLogin = false;
      this.router.navigate(['']);
    } else {
      this.errorLogin = true;
    }
  }

}

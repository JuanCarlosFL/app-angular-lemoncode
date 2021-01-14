import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

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

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid) {
      this.validateLogin(this.form.value);
    }
  }

  private validateLogin(user: User) {
    if (this.service.login(user)){
      this.errorLogin = false;
      this.router.navigate(['dashboard']);
    } else {
      this.errorLogin = true;
    }
  }

}

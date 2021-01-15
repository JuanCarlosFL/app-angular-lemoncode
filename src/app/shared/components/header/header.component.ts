import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }

  getUsername(): string {
    return this.auth.getUsername();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['home']);
  }

}

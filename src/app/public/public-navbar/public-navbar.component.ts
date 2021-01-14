import { Component } from '@angular/core';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})

export class PublicNavbarComponent  {
  links = [
  {
    label: 'Home',
    link: '/home'
  },
  {
    label: 'Login',
    link: '/login'
  },
  {
    label: 'About',
    link: '/about'
  }
];

  activeLink = this.links[0];


}

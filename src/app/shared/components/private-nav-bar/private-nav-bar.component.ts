import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-nav-bar',
  templateUrl: './private-nav-bar.component.html',
  styleUrls: ['./private-nav-bar.component.scss']
})

export class PrivateNavBarComponent{
  links = [
    {
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      label: 'Galería',
      link: '/galeria'
    },
    {
      label: 'Crud',
      link: '/crud'
    },
    {
      label: 'Profile',
      link: '/profile'
    }
  ];

    activeLink = this.links[0];

}

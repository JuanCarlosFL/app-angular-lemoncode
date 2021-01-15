import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PrivateNavBarComponent } from './components/private-nav-bar/private-nav-bar.component';
import { PublicNavbarComponent } from './components/public-navbar/public-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PrivateNavBarComponent,
    PublicNavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    PrivateNavBarComponent,
    PublicNavbarComponent
  ]
})
export class SharedModule { }

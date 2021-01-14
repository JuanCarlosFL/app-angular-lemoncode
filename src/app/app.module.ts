import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PublicNavbarComponent } from './public/public-navbar/public-navbar.component';
import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import { LoginComponent } from './public/pages/login/login.component';
import { PrivateModule } from './private/private.module';
import { PrivateNavBarComponent } from './public/private-nav-bar/private-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicNavbarComponent,
    PrivateNavBarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PrivateModule,
    AppRoutingModule,
    PrivateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudComponent } from './private/pages/crud/crud.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { GaleriaComponent } from './private/pages/galeria/galeria.component';
import { ProfileComponent } from './private/pages/profile/profile.component';
import { PrivateComponent } from './private/private.component';
import { AboutComponent } from './public/pages/about/about.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

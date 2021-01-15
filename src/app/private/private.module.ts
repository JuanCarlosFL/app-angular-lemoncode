import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    GaleriaComponent,
    CrudComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ],
  exports: [
    DashboardComponent,
    CrudComponent,
    GaleriaComponent,
    ProfileComponent
  ]
})
export class PrivateModule { }

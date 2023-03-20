import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FarmersComponent } from './farmers/farmers.component';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    AdminComponent,
    FarmersComponent,
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule

    
  ]
})
export class AdminModule { }

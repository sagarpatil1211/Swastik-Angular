import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FarmersComponent } from './farmers/farmers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CropsComponent } from './crops/crops.component';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    FarmersComponent,
    CropsComponent
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule

    
  ]
})
export class AdminModule { }

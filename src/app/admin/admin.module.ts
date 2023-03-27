import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

import { FarmersComponent } from './farmers/farmers.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsComponent } from './admins/admins.component';
import { CropsComponent } from './crops/crops.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    FarmersComponent,
    AdminsComponent,
    CropsComponent,
    RecommendationsComponent
    
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ]
})
export class AdminModule { }

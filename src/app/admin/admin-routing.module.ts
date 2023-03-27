import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { CropsComponent } from './crops/crops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmersComponent } from './farmers/farmers.component';
import { LandingComponent } from './landing.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

const routes: Routes = [
  {path:"", component : LandingComponent, children :[
    {path : "", component : DashboardComponent},
    {path : "dashboard", component : DashboardComponent},
    {path : "admins", component : AdminsComponent},
    {path : "farmers", component : FarmersComponent},
    {path : "crops", component : CropsComponent},
    {path : "farmers/recommendations/:farmerid", component : RecommendationsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

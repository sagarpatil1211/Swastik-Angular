import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './crops/crops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmersComponent } from './farmers/farmers.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:"", component : LandingComponent, children :[
    {path : "", component : DashboardComponent},
    {path : "dashboard", component : DashboardComponent},
    {path : "farmers", component : FarmersComponent},
    {path : "crops", component : CropsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

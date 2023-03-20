import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmersComponent } from './farmers/farmers.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:"", component : LandingComponent, children :[
    {path : "", component : DashboardComponent},
    {path : "dashboard", component : DashboardComponent},
    {path : "admins", component : AdminComponent},
    {path : "farmers", component : FarmersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

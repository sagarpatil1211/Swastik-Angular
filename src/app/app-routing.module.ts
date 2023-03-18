import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './admin/landing.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  {path:"", component : LoginComponent , pathMatch: "full"},
  {path:"login", component : LoginComponent},
  {path:"footer", component : FooterComponent},
  {path:'admin', loadChildren: ()=>import("./admin/admin.module").then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

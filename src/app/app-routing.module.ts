import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"" ,redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent , title:"Home"},
  {path:"register",component:RegisterComponent , title:"Register"},
  {path:"login",component:LoginComponent , title:"Login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

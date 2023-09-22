import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  {path : '',redirectTo : 'login', pathMatch:'full'},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component : DashbordComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'verify-email', component : VerifyEmailComponent},
  {path : 'forgot-password', component : ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

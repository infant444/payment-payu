import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './Component/page/payment/payment.component';
import { LoginComponent } from './Component/page/login/login.component';
import { RegisterComponent } from './Component/page/register/register.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { DashboardComponent } from './Component/page/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'payment',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

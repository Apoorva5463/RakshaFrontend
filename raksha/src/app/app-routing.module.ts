import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent }from './user-dashboard/user-dashboard.component';
import {  CarInsuranceComponent } from './car-insurance/car-insurance.component';
import {  BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import {  LoginComponent } from './login/login.component';
import { ViewInsuranceComponent } from "./view-insurance/view-insurance.component";
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {  InsuranceComponent } from './insurance/insurance.component';
import {  NotifyComponent } from './notify/notify.component';
import { UpdateComponent } from "./update/update.component";

const routes: Routes = [
  {path:'getquote',component : GetQuoteComponent},
  {path:'admin',component: AdminDashboardComponent},
  {path:'carinsurance', component: CarInsuranceComponent},
  {path:'Bikeinsurance', component: BikeInsuranceComponent},
  {path:'login', component: LoginComponent},
  {path:'viewinsurance', component: ViewInsuranceComponent},
  {path:'payment', component: PaymentGatewayComponent},
  {path:'personaldetails', component: PersonalDetailsComponent},
  {path:'insurance', component: InsuranceComponent},
  {path:'notify', component: NotifyComponent},  
  {path:'user', component: UserDashboardComponent},
  {path:'update', component: UpdateComponent},

  {path:'**',redirectTo: '/list',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

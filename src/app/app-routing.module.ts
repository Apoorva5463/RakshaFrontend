import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent }from './user-dashboard/user-dashboard.component';
import {  CarInsuranceComponent } from './car-insurance/car-insurance.component';
import {  BikeInsuranceComponent } from './Bike-insurance/bike-insurance.component';
import {  LoginComponent } from './login/login.component';
import { DownloadInsuranceComponent } from './download-insurance/download-insurance.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {  InsuranceComponent } from './insurance/insurance.component';
import {  NotifyComponent } from './notify/notify.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
const routes: Routes = [
  {path:'',component : GetQuoteComponent},
  {path:'admin',component: AdminDashboardComponent},
  {path:'carinsurance', component: CarInsuranceComponent},
  {path:'Bikeinsurance', component: BikeInsuranceComponent},
  {path:'login', component: LoginComponent},
  {path:'download', component: DownloadInsuranceComponent},
  {path:'payment', component: PaymentGatewayComponent},
  {path:'personaldetails', component: PersonalDetailsComponent},
  {path:'insurance', component: InsuranceComponent},
  {path:'notify', component: NotifyComponent},  
  {path:'user', component: UserDashboardComponent},
  {path:'profiles',component:UserProfilesComponent},
  {path:'**',redirectTo: '/list',pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

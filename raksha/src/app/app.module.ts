import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { DownloadInsuranceComponent } from './download-insurance/download-insurance.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoginComponent } from './login/login.component';
import { NotifyComponent } from './notify/notify.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GetQuoteComponent,
  
    CarInsuranceComponent,
    DownloadInsuranceComponent,
    InsuranceComponent,
    LoginComponent,
    NotifyComponent,
    PaymentGatewayComponent,
    PersonalDetailsComponent,
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

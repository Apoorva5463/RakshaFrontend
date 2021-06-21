import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from 'src/insurance.model';
import { PersonalDetails } from 'src/PersonalDetails.model';
import { Vehicle } from 'src/vehicle.model';
import { ViewInsuranceService } from "../service/view-insurance.service";

@Component({
  selector: 'app-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {
  public userDetail : PersonalDetails = new PersonalDetails();
  public InsuranceDetail : Insurance= new Insurance();
  public vehicleDetail : Vehicle= new Vehicle();
  constructor(private router:Router,private service : ViewInsuranceService) { }

  ngOnInit(): void {
    this.service.getUsersById("10").then((data )=> { this.userDetail= data;});
    this.service.getInsuranceById("100").then((data )=> { this.InsuranceDetail= data;});
    this.service.getVehicleById("").then((data )=> { this.vehicleDetail= data;});

  }

}

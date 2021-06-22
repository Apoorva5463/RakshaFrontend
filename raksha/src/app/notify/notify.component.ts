import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from 'src/insurance.model';
import { User } from 'src/user.model';
import { InsuranceService } from '../service/insurance.service';
import { SharedService } from '../service/shared.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
   details:any;
   userid:number=0;
   policyid:number=0;
   user:User=new User();
   insurance:Insurance=new Insurance();
  constructor(private sharedService: SharedService, private router: Router,private service:UserService,private services:InsuranceService) {
    this.details = sharedService.getSharedData("Notify");
    this.user.fname=this.details.data.fname;
    this.user.mname=this.details.data.mname;
    this.user.lname=this.details.data.lname;
    this.user.mobileNo=this.details.data.mobileNo;
    this.user.gmail=this.details.data.gmail;
    this.user.photoId=this.details.data.photoId;
    this.user.photoIdType=this.details.data.photoIdType


   
    this.insurance.startDate=this.details.data.startDate;
    this.insurance.endDate=this.details.data.endDate;
    this.insurance.type=this.details.data.insuranceType;
    this.insurance.plan=this.details.data.plan;
    this.insurance.fee=this.details.data.fee;
    this.insurance.vehicleType=this.details.data.vehicleType;
    this.insurance.vehicle_no=this.details.data.VehicleNumber;
    
   }

  ngOnInit(): void {
    this.service.addUser(this.user).subscribe((data)=>{
      this.userid=data;
      this.insurance.userId=this.userid;
      this.services.addInsurance(this.insurance).subscribe((data)=>{
        this.policyid=data;
      });
    });
    
  }
  login(){
    this.router.navigate(['login']);
  }
  home(){
    this.router.navigate(['']);
  }

}

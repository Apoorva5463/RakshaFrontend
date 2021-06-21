import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedItem } from 'src/shared-item.model';
import { User } from 'src/user.model';
import { SharedService } from '../service/shared.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  selectedDate:string='';
  
  date:number=0;
  bore:number=0;
  private sharedItem: SharedItem = new SharedItem();
  user: User = new User();
  Insurance:any;
  toNotify:any={
    InsuranceType:'',
    Plan:'',
    VehicleNumber:0,
    vehicleType:'',
    modelId:0,
    fname:'',
    lname:'',
    mname:'',
    mobileNo:'',
    gmail:'',
    startDate:'',
    photoId:'',
    photoIdType:'',
    endDate:''
  }


  constructor(private router: Router,private service:UserService,private sharedService: SharedService) { 
    this.Insurance = sharedService.getSharedData("PersonalDetails");
    this.toNotify.modelId=this.Insurance.data.modelId;
    this.toNotify.vehicleType=this.Insurance.data.vehicleType;
    this.toNotify.VehicleNumber=this.Insurance.data.VehicleNumber;
    this.toNotify.Plan=this.Insurance.data.plan;
    this.toNotify.InsuranceType=this.Insurance.data.insuranceType;
  }

  ngOnInit(): void {
  
  }
 save(){
 
  this.toNotify.fname=this.user.fname;
  this.toNotify.lname=this.user.lname
  this.toNotify.mobileNo=this.user.mobileNo;
  this.toNotify.gmail=this.user.gmail;
  this.toNotify.photoId=this.user.photoId;
  this.toNotify.photoIdType=this.user.photoIdType;
  this.toNotify.startDate=this.selectedDate;
  let datesPartList = this.selectedDate.split("-");
  var year = +datesPartList[0];
  if(this.Insurance.data.plan=="3 Year"){
    year=3+year;

  }
  if(this.Insurance.data.plan=="2 Year"){
    year=2+year;

  }
  if(this.Insurance.data.plan=="1 Year"){
    year=1+year;

  }
  this.toNotify.endDate=year+'-'+datesPartList[1]+'-'+datesPartList[2];
  this.sharedItem.src = "personalDetails";
  this.sharedItem.data = this.toNotify;
    console.log(this.sharedItem.data);
  this.sharedService.setSharedData("Notify", this.sharedItem);
   console.log(this.sharedItem.data);
 
  this.router.navigate(['payment']);
 }
}

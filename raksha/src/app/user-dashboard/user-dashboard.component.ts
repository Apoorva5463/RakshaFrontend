import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Udash } from 'src/udash.model';
import { UdashService } from '../service/udash.service';
import { PersonalDetails } from 'src/PersonalDetails.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public userDetail : PersonalDetails = new PersonalDetails();
  public InsuranceList : Udash[]=[];
  constructor(private router:Router,private service : UdashService) { }

  ngOnInit(): void {

    this.service.getInsuranceDetail().then((data) => { this.InsuranceList= data;});
    this.service.getUserDetail().then((data)=>{this.userDetail = data});
  }
   
}

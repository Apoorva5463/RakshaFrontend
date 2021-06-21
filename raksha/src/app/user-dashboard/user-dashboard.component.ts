import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from 'src/insurance.model';
import { InsuranceService } from '../service/insurance.service';
import { PersonalDetails } from 'src/PersonalDetails.model';
import { GetUrl } from "src/getUrl.model";


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public userDetail : PersonalDetails = new PersonalDetails();
  public InsuranceList : Insurance[]=[];
  public downloadurl : GetUrl = new GetUrl();
  constructor(private router:Router,private service : InsuranceService) { }

  ngOnInit(): void {
    this.service.getInsuranceDetail().then((data) => { this.InsuranceList= data;});
    this.service.getUserDetail().then((data)=>{this.userDetail = data});
  }
   
  public downloadlinkurl(id: string):void{
    this.service.getDownloadUrl(id).then((data)=>{ 
      this.downloadurl = data;
      console.log("URL : "+this.downloadurl.url);
      window.open(this.downloadurl.url, '_blank');
      
    });
  }
   viewUserInsurance(){
    this.router.navigate(['viewinsurance']);
    
 }
}

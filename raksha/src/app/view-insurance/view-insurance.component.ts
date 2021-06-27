import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewInsurance } from "src/view-insurance.model";
import { ViewInsuranceService } from "../service/view-insurance.service";
import { SharedItem } from 'src/shared-item.model';
import { SharedService } from '../service/shared.service';
import { InsuranceService } from '../service/insurance.service';
import { GetUrl } from 'src/getUrl.model';
@Component({
  selector: 'app-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {
  Details:SharedItem;
  id:number=100;
  public viewInsuranceDetail : ViewInsurance= new ViewInsurance();
  public downloadurl : GetUrl = new GetUrl();
  constructor(private router:Router,private service : ViewInsuranceService,private sharedService : SharedService,private services : InsuranceService) { 
    this.Details = sharedService.getSharedData("UserDetail");
    console.log(this.Details.src);
    console.log(this.Details.data);
  }

  ngOnInit(): void {
    this.service.getViewInsuranceById(this.Details.data).then((data )=> { this.viewInsuranceDetail= data;
      console.log(this.viewInsuranceDetail);

    });
    
     
  }
  login(){
    this.router.navigate(['login']);
  }
  home(){
    this.router.navigate(['']);
  }
  public downloadlinkurl(id:number):void{
    this.services.getDownloadUrl(''+id).then((data)=>{ 
      this.downloadurl = data;
      console.log("URL : "+this.downloadurl.url);
      window.open(this.downloadurl.url, '_blank');
      
    });
  }
 user(){
   this.router.navigate(['user']);
 }
}

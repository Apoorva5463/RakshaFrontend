import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SharedItem } from 'src/shared-item.model';
import { InsurancePlans } from '../InsurancePlans.model';
import { InsuranceService } from '../service/insurance.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
   plan: string = '';
   model:string='';
   year:number=0;
   vehicleType:string='';
   modelId:number=6;
   insurancePlans:InsurancePlans=new InsurancePlans();
   vDetails:any;

   toPersonalDetails:any={
   insuranceType:'',
    plan:'',
    VehicleNumber:0,
    vehicleType:'',
    modelId:0,
    fee:0
   };
   private sharedItem: SharedItem = new SharedItem();

  constructor(private route:Router,private service:InsuranceService,private sharedService: SharedService) { 
    this.vDetails = sharedService.getSharedData("Insurance");
    console.log(this.vDetails.src);
    this.toPersonalDetails.modelId=this.vDetails.data.modelId;
    this.toPersonalDetails.vehicleType=this.vDetails.data.vehicleType;
    this.toPersonalDetails.VehicleNumber=this.vDetails.data.vehicleNumber;
  }

  ngOnInit(): void {
       this.service.getInsurancePlans(this.vDetails.data.vehicleType,this.vDetails.data.modelId).then((data)=>{
      this.insurancePlans=data;
      console.log(this.insurancePlans);
    }); 
   
  }
  buy(){
    console.log(this.plan);
    if(this.plan=="third 3 year"){
      this.toPersonalDetails.plan="3 Year";
      this.toPersonalDetails.insuranceType="Third Party";
      this.toPersonalDetails.fee=this.insurancePlans.thirdYear3;
    }
    if(this.plan=="third 2 year"){
      this.toPersonalDetails.plan="2 Year";
      this.toPersonalDetails.insuranceType="Third Party";
      this.toPersonalDetails.fee=this.insurancePlans.thirdYear2;
    }
    if(this.plan=="third 1 year"){
      this.toPersonalDetails.plan="1 Year";
      this.toPersonalDetails.insuranceType="Third Party";
      this.toPersonalDetails.fee=this.insurancePlans.thirdYear1;
    }
    if(this.plan=="compre 3 year"){
      this.toPersonalDetails.plan="3 Year";
      this.toPersonalDetails.insuranceType="Comprehensive";
      this.toPersonalDetails.fee=this.insurancePlans.compreYear3;
    }
    if(this.plan=="compre 2 year"){
      this.toPersonalDetails.plan="2 Year";
      this.toPersonalDetails.insuranceType="Comprehensive";
      this.toPersonalDetails.fee=this.insurancePlans.compreYear2;
    }
    if(this.plan=="compre 1 year"){
      this.toPersonalDetails.plan="1 Year";
      this.toPersonalDetails.insuranceType="Comprehensive"
      this.toPersonalDetails.fee=this.insurancePlans.compreYear1;
    }
    this.sharedItem.src = "insurance";
    this.sharedItem.data = this.toPersonalDetails;
      console.log(this.sharedItem.data);
    this.sharedService.setSharedData("PersonalDetails", this.sharedItem);
     this.route.navigate(['personaldetails']);
  }

}

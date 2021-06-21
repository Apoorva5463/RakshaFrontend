import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { InsurancePlans } from '../InsurancePlans.model';
import { InsuranceService } from '../service/insurance.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
   model:string='';
   year:number=0;
   vehicleType:string='';
   modelId:number=6;
   insurancePlans:InsurancePlans=new InsurancePlans();
   vDetails:any;
   toPersonalDetails:any={
   insuranceType:'',
    Plan:0,
    VehicleNumber:0,
    vehicleType:'',
    modelId:0
   }

  constructor(private route:Router,private service:InsuranceService,private sharedService: SharedService) { 
    this.vDetails = sharedService.getSharedData("Insurance");
    console.log(this.vDetails.src);
    console.log(this.vDetails.data.modelId);
    console.log(this.vDetails.data.vehicleType);
    console.log(this.vDetails.data.vehicleNumber);
  }

  ngOnInit(): void {
    //this.activatedRoute.paramMap.subscribe(params=>{
      //this.vehicleType=params.get('vehicleType') //+ string to number
//})



    this.service.getInsurancePlans("Car",6).then((data)=>{
      this.insurancePlans=data;
      console.log(this.insurancePlans);
    }); 
  }

}

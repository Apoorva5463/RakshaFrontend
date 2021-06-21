import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service'
import { Car } from 'src/Car.model';
import { not, variable } from '@angular/compiler/src/output/output_ast';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Bike } from 'src/Bike.model';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { SharedItem } from 'src/shared-item.model';





@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  displayConfirmBox = false;
   DisplayDialogBox=false;
   public vehicleNumber : string='';
  private vehicle : any ;
  private toInsuranceData: any ={
    vehicleType:'',
    modelId:0,
    vehicleNumber:''
  };
  private sharedItem: SharedItem = new SharedItem();


  constructor(private router:Router,
    private service : VehicleService,
    private sharedService : SharedService) { 

    }

  ngOnInit(): void {
  }

  save() {
    this.service.getVehicleDetails(this.vehicleNumber).then((data)=>{
      this.vehicle=data;
      console.log(this.vehicle.vehicleType);
      console.log(this.vehicle.modelTypeId);

      this.toInsuranceData.vehicleType = this.vehicle.vehicleType;
      this.toInsuranceData.modelId = this.vehicle.modelTypeId;
      this.toInsuranceData.vehicleNumber = this.vehicleNumber;

      this.sharedItem.src = "GetQuote";
      this.sharedItem.data = this.toInsuranceData;

      this.sharedService.setSharedData("Insurance", this.sharedItem);

      this.router.navigate(['insurance']);
    });
    
    //this.vehicleModel=this.service.vehicleDetails(this.vehicleNumber)
    
    
  }
  popUp(){
    this.displayConfirmBox = true;
    this.DisplayDialogBox=true;
 }
cancel(){
  this.DisplayDialogBox=false;
  this.displayConfirmBox = false;
}
 ClickCar(){
    this.router.navigate(['carinsurance']);
 }

 ClickBike(){
    this.router.navigate(['Bikeinsurance']);
 }
  
}

function elseif(_vehicleType: any) {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from './service/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router,private service : VehicleService){}
  public vehicleNumber : string='';
  private vehicle : any ;
  private carModel: any;
  private bikeModel:any;
  private brand:string='';
  private toInsuranceData: any ={
    model:'',
    year : 0,
    price: 0.0,
    vehicleNumber:''
  };
  ngOnInit(): void {
   
  }
  title = 'raksha';
  save() {
    this.service.getVehicleDetails(this.vehicleNumber).then((data)=>{
      this.vehicle=data;
      console.log(this.vehicle.vehicleType);
      console.log(this.vehicle.modelTypeId);
      var modelId=Number(this.vehicle.modelTypeId);

      if(this.vehicle.vehicleType == "Car"){
        this.service.getCarModelDetails(modelId).then((data)=>{
          this.carModel=data;
          console.log(this.carModel.brand);
          this.toInsuranceData.model=this.carModel.variant;
           this.toInsuranceData.year=this.carModel.year ;
           this.toInsuranceData.price = this.carModel.price ;
           this.toInsuranceData.vehicleNumber=this.vehicleNumber;
          console.log(this.toInsuranceData);
          this.router.navigate(['insurance',this.toInsuranceData]);
         
        });
      }
        if(this.vehicle.vehicleType == "Bike"){
          this.service.getBikeModelDetails(modelId).then((data)=>{
            this.bikeModel=data;
            console.log(this.bikeModel.brand);
            this.toInsuranceData.model=this.bikeModel.model;
            this.toInsuranceData.year=this.bikeModel.year;
            this.toInsuranceData.price= this.bikeModel.price;
            this.toInsuranceData.vehicleNumber=this.vehicleNumber;
            console.log(this.toInsuranceData);
            this.router.navigate(['insurance',this.toInsuranceData]);
          });

        } 
       else{
         if(this.vehicle.modelTypeId == "undefined"){
         throw new Error("$invalid");

       }
      }

    });
    
   
    
    
  }
}

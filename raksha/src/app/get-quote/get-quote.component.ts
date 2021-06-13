import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service'
import { Car } from 'src/Car.model';


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {


  constructor(private router:Router,private service : VehicleService) { }
  public vehicleNumber : string='';
  private vehicle : any ;
  private carModel: any;
  private bikeModel:any;
  i:number=0;

  ngOnInit(): void {
  }
  submit(){
    this.router.navigate(['Bikeinsurance']);
    
  }
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
        });
      }
        else{
          this.service.getBikeModelDetails(modelId).then((data)=>{
            this.bikeModel=data;
            console.log(this.bikeModel.brand);
          });

        } 
    });
    
    //this.vehicleModel=this.service.vehicleDetails(this.vehicleNumber)
    this.router.navigate(['insurance']);
    
  }

  

}
function elseif(vehicleType: any) {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service'


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {


  constructor(private router:Router,private service : VehicleService) { }
  public vehicleNumber : string='';
  private vehicle : any ;

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
    });
    //this.vehicleModel=this.service.vehicleDetails(this.vehicleNumber)
    this.router.navigate(['insurance']);
    
  }


}

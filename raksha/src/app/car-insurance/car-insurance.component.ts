import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/Car.model';

import { CarService } from '../service/car.service';

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent implements OnInit {
  public brandList:string[]=[];
  public modelList:string[]=[];
  public variantList:string[]=[];
  public selectedBrand: string = '';
  public selectedModel:string='';
  selectedVariant:string='';
  fuelType:string='';
  public year:number=0;
  car: Car = new Car();
  private toInsuranceData: any ={
   model:'',
   year : 0,
   price: 60000,
 };
 modelId:number=0;


  constructor(private service:CarService,private router:Router) { 
   
   
  }

  ngOnInit(): void {
    this.service.getBrandList().then((data)=>{
      this.brandList = data;
      

    }); 
  }
 
 
  getModel(val:any): void{
   
    this.service.getModelFromBrand(this.selectedBrand).then((data)=>{
      this.modelList=data;
    });
  }
  getVariant(val:any):void{
  
    this.service.getCarVariantFromBrandModel(this.selectedBrand,this.selectedModel).then((data)=>{
      this.variantList=data;
    });
  }
 
  save(){
    //this.selectedVariant = this.selectedVariant.replace(" ","%20");
    this.car.Model=this.selectedModel;
    console.log(this.car.Model);
    this.car.Brand=this.selectedBrand;
    this.car.variant=this.selectedVariant;
     this.car.fuelType=this.fuelType;
     this.car.Year=2018;
   
    this.service.getCarId(this.car).subscribe((data)=>{
      this.modelId=data;
    });
    this.router.navigate(['insurance']);

  }


  click : boolean = false;

  onButtonClick(event : MouseEvent){
    (event.target as HTMLButtonElement).disabled = true;
}


}

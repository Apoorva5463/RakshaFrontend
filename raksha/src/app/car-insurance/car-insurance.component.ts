import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  public year:string='';
  private toInsuranceData: any ={
   model:'',
   year : 0,
   price: 60000,
 };


  constructor(private service:CarService,private router:Router) { }

  ngOnInit(): void {
    this.service.getBrandList().then((data)=>{
      this.brandList = data;

    }); 
  }
 
  getModel(val:any): void{
    console.log("Selected Brand : "+this.selectedBrand);
    this.service.getModelFromBrand(this.selectedBrand).then((data)=>{
      this.modelList=data;
    });
  }
  getVariant(val:any):void{
    console.log("selected:"+this.selectedModel);
    this.service.getCarVariantFromBrandModel(this.selectedBrand,this.selectedModel).then((data)=>{
      this.variantList=data;
    });
  }
  save(){
    //this.selectedVariant = this.selectedVariant.replace(" ","%20");
    this.toInsuranceData.model=this.selectedVariant;

    this.toInsuranceData.year=this.year;
    this.router.navigate(['insurance',this.toInsuranceData]);

  }
  reset(){
    this.router.navigate(['carinsurance'])
  }
  click : boolean = false;

  onButtonClick(event : MouseEvent){
    (event.target as HTMLButtonElement).disabled = true;
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/Bike.model';
import { BikeService } from '../service/bike.service';

@Component({
  selector: 'app-bike-insurance',
  templateUrl: './bike-insurance.component.html',
  styleUrls: ['./bike-insurance.component.css']
})
export class BikeInsuranceComponent implements OnInit {
  bike:Bike=new Bike();
  public brandList:string[]=[];
  public modelList:string[]=[];
  public selectedBrand: string = '';
  public selectedModel:string='';
 public year:string='';
 private toInsuranceData: any ={
  model:'',
  year : 0,
  price: 60000,
};

  constructor(private service:BikeService,private router:Router) { }

  ngOnInit(): void {
    this.service.getBrandList().then((data)=>{
      this.brandList = data;

    }); 
  }
  getModel(val:any): void{
    this.bike.brand=this.selectedBrand;
    this.service.getModelFromBrand(this.selectedBrand).then((data)=>{
      this.modelList=data;
    });
  
  }

  save(){
    this.bike.model=this.selectedModel;
    this.bike.year="2018";
    this.toInsuranceData.model=this.selectedModel;
    this.toInsuranceData.year=this.year;
    this.service.getBikeId(this.bike);

    this.router.navigate(['insurance',this.toInsuranceData]);

  }
 
  
}

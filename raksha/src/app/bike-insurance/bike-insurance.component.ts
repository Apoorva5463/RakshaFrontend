import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../service/bike.service';

@Component({
  selector: 'app-bike-insurance',
  templateUrl: './bike-insurance.component.html',
  styleUrls: ['./bike-insurance.component.css']
})
export class BikeInsuranceComponent implements OnInit {
  public brandList:string[]=[];
  public modelList:string[]=[];
  public selectedBrand: string = '';
  public selectedModel:string='';
 public year:number=0;
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
    console.log("Selected Brand : "+this.selectedBrand);
    this.service.getModelFromBrand(this.selectedBrand).then((data)=>{
      this.modelList=data;
    });
  
  }
  
  save(){
    this.toInsuranceData.model=this.selectedModel;
    this.toInsuranceData.year=this.year;
    this.router.navigate(['insurance',this.toInsuranceData]);

  }
}

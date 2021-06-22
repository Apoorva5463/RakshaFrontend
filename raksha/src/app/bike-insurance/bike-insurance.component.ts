import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/Bike.model';
import { SharedItem } from 'src/shared-item.model';
import { BikeService } from '../service/bike.service';
import { SharedService } from '../service/shared.service';

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
 public year:number=0;
 public modelId:number=0;
 private toInsuranceData: any ={
  vehicleType:'Bike',
  modelId:0,
  vehicleNumber:''
};
private sharedItem: SharedItem = new SharedItem();
  constructor(private service:BikeService,private router:Router,private sharedService : SharedService) { }
  


  ngOnInit(): void {
    this.service.getBrandList().then((data)=>{
      this.brandList = data;

    }); 
  }
  login(){
    this.router.navigate(['login']);
  }
  home(){
    this.router.navigate(['']);
  }
  getModel(val:any): void{
  
    this.service.getModelFromBrand(this.selectedBrand).then((data)=>{
      this.modelList=data;
    });
  
  }

  save(){

    this.bike.brand=this.selectedBrand;
    this.bike.model=this.selectedModel;
    this.bike.year=2018;

    this.service.getBikeId(this.bike).subscribe((data)=>{
      this.modelId=data;
      this.toInsuranceData.modelId = this.modelId;
      this.sharedItem.src = "Bikeinsurance";
    this.sharedItem.data = this.toInsuranceData;
    this.sharedService.setSharedData("Insurance", this.sharedItem);
    this.router.navigate(['insurance']);

    });
    
  }
 
  
}

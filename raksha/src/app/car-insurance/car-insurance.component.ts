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
  selectedBrand: string = ''
  constructor(private service:CarService) { }

  ngOnInit(): void {
    this.service.getBrandList().then((data)=>{
      this.brandList = data;
    });
  }

}

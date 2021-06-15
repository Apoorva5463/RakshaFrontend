import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent implements OnInit {
  private brandList:string[];
  constructor(private router:Router,private service : CarService) { }

  async ngOnInit() {
  (await this.service.getbrandlist()).subscribe(data => this.brandList= data)
   //console.log(typeof(this.service.getbrandlist()));
  }
  save(){
    this.router.navigate(['insurance']);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewInsurance } from "src/view-insurance.model";
import { ViewInsuranceService } from "../service/view-insurance.service";

@Component({
  selector: 'app-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {

  public viewInsuranceDetail : ViewInsurance= new ViewInsurance();
  
  constructor(private router:Router,private service : ViewInsuranceService) { }

  ngOnInit(): void {
    this.service.getViewInsuranceById(100).then((data )=> { this.viewInsuranceDetail= data;});
   

  }

}

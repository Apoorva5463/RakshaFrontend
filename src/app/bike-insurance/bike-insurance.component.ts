import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-insurance',
  templateUrl: './bike-insurance.component.html',
  styleUrls: ['./bike-insurance.component.css']
})
export class BikeInsuranceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    this.router.navigate(['insurance']);
    
  }
}

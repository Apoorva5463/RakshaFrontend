import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigate(['Bikeinsurance']);
    
  }
  save(){
    this.router.navigate(['carinsurance']);
    
  }

}

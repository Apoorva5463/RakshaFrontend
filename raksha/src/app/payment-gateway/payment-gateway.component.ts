import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.route.navigate(['login']);
  }
  home(){
    this.route.navigate(['']);
  }

 save(){
   this.route.navigate(['buffer'])
 }
}

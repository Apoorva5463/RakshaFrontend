import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  verify:any;
  verification:any={
    gmail:'',
    mobileNo:''

  };
  constructor(private router: Router,private service:UserService,private sharedService: SharedService) { 
    this.verify= sharedService.getSharedData("verify");
    this.verification.gmail=this.verify.data.gmail;
    this.verification.mobileNo=this.verify.data.mobileNo;
  }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['login']);
  }
  home(){
    this.router.navigate(['']);
  }
verifyEmail(){

}
verifyMobile(){

}
}

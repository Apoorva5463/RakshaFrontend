
import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Otp } from 'src/otp.model';
import { UserLogin } from 'src/UserLogin.model';
import { SharedService } from '../service/shared.service';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  //userLogin: UserLogin = new UserLogin();
  //userLogin: UserLogin = new UserLogin();
  userLogin!: UserLogin;
  // otp:any;
  //public otpdata: 
  public email : string = '';
  public mobile : string = '';
  public password : string = '';
  public enteredOtp : number = 0;
  public vOTP : number = 0;
  public vsource: string='';
  // public otpstatus: any ={
  //   otp: '',
  //   status:''
  // };

  // public getotp : boolean = false; 
  // otpdata: any;
  constructor(private userLoginService: UserloginService, private router: Router, private sharedService: SharedService) { 
    this.vOTP = this.sharedService.getSharedData("OTP").data.otp;
    this.vsource = this.sharedService.getSharedData("OTP").src;
  }
  //private userLoginService: UserloginService, private router: Router
  ngOnInit(): void {
    
  }

  // clickOnGetOTP(){
  //   console.log(this.userLogin.emailId);
  //   this.userLoginService.getOtp(this.userLogin).then((data: any) =>{

  //     this.otpdata = data;
  //     this.otpstatus.otp=this.otpdata.otp;
  //     this.otpstatus.status=this.otpdata.status;
  //     console.log("Success");
      
  //     // if(this.otpstatus.status === "OTP IS NOT SENT")
  //     //     {
  //     //       alert('Email id is incorrect');
  //     //     }
  //     if(this.otpstatus.status === "OTP IS SENT")
  //     {
  //       this.getotp = true;
  //       this.router.navigate(['/otp']);
  //     }
  //   });
  // }


  otpVerification(){
    console.log("Success");
  
      if(this.enteredOtp == this.vOTP){
        console.log("Success");
        if(this.vsource=="AdminLogin"){
          this.router.navigate(['admin']);
        }else{
        this.router.navigate(['user']);}
        
        alert('Login Successful');
        console.log("Success");
        // this.router.navigate(['/admin'],{ queryParams: {email: this.userLogin.emailId, mobile: this.userLogin.mobileNo, password: this.userLogin.password}})
      }
    
      else{
        alert("Wrong otp");
      }
    
  }
  onButtonClick(event : MouseEvent){
    (event.target as HTMLButtonElement).disabled = true;
}
}

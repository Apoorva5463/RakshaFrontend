import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/UserLogin.model';
import { UserloginService } from '../userlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  public otpdata: any;
  public email : string = '';
  public mobile : string = '';
  public enteredOtp : number = 0;
  public otpstatus: any ={
    otp: '',
    status:''
  };

  constructor(private userLoginService: UserloginService, private router: Router) { }

  ngOnInit(): void {
  }

  clickOnGetOTP(){
    this.userLoginService.getOtp(this.userLogin).then((data: any) =>{
      this.otpdata = data;
      this.otpstatus.otp=this.otpdata.otp;
      this.otpstatus.status=this.otpdata.status;
      if(this.otpstatus.status === "OTP IS NOT SENT"){alert('Email id is incorrect');}
    });

  }

  otpVerification(){
    if(this.otpstatus.status === "OTP IS SENT"){
      if(this.enteredOtp == this.otpstatus.otp){
        this.router.navigate(['/insurance'])
        alert('Login Successful');
        console.log("Success");
        this.router.navigate(['/admin'],{ queryParams: {email: this.userLogin.emailId, mobile: this.userLogin.mobileNo}})
      }
      else{
        alert("Wrong otp");
      }
    }
  }

}

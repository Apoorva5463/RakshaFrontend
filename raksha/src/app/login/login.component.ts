
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/Login-details.model';
import { Otp } from 'src/otp.model';
import { SharedItem } from 'src/shared-item.model';
import { UserLogin } from 'src/UserLogin.model';
import { SharedService } from '../service/shared.service';
import { UserloginService } from '../userlogin.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  
  public otpdata: any;
  public Votp: Otp=new Otp();
  public email : string = '';
  public mobile : string = '';
  public enteredOtp : number = 0;

  public sharedItem : SharedItem = new SharedItem();
  
  public getotp : boolean = false; 

  constructor(private userLoginService: UserloginService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    let loginDetail: LoginDetails = this.sharedService.getLoginDetails();
    if(loginDetail.isLogged){
      if(loginDetail.userType=="Admin"){
        this.router.navigate(['admin']);
      }else{
        this.router.navigate(['user']);
      }
    }
  }
  
  home(){
    this.router.navigate(['']);
  }
  clickOnGetOTP(){
    console.log(this.userLogin.emailId);
    this.userLoginService.getOtp(this.userLogin).then((data) =>{
      this.otpdata = data;

      this.sharedItem.src = "UserLogin";
      this.sharedItem.data = this.otpdata;

      this.sharedService.setSharedData("OTP",this.sharedItem);
      // this.otpstatus.otp=this.otpdata.otp;
      this.Votp.actualotp=this.otpdata.otp;    
      // this.otpstatus.status=this.otpdata.status;
      this.Votp.status=this.otpdata.status;
      console.log("Success");
      console.log(this.Votp.actualotp);
      
      if(this.Votp.status === "OTP IS NOT SENT")
          {
            alert('Email id is incorrect');
          }
      if(this.Votp.status === "OTP IS SENT")
      {
        this.getotp = true;
        this.router.navigate(['/otp']);
      }
    }
      );
    }
  


  

  onButtonClick(event : MouseEvent){
    (event.target as HTMLButtonElement).disabled = true;
}

}


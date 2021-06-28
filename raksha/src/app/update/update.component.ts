import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/Login-details.model';
import { User } from 'src/user.model';
import { SharedService } from '../service/shared.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  user: User = new User();
  constructor(private router: Router, private service: UserService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.logindetails = this.sharedService.getLoginDetails();
    if (this.logindetails.isLogged) {
      this.loginoutBtn = "Logout";
    }
    else {
      this.loginoutBtn = "Login";
    }
  }
  public loginoutBtn: string = "Login";
  public logindetails: LoginDetails = new LoginDetails;
  loginout() {
    if (this.logindetails.isLogged) {
      var answer: boolean = confirm("Are you sure you want to logout?");
      if (answer) {
        this.logindetails.isLogged = false;
        this.logindetails.userType = "";
        this.logindetails.userID = 0;
        this.sharedService.setLoginDetails(this.logindetails);
        this.loginoutBtn = "Login";
      }
    }
    else {
      this.loginoutBtn = "Logout";
      this.router.navigate(['login']);
    }
  }
  dashboard() {
    if (this.logindetails.userType == 'User') {
      this.router.navigate(['user']);
    } else {
      this.router.navigate(['admin']);
    }
  }

  home() {
    this.router.navigate(['']);
  }

  save() {
    this.service.addUser(this.user)
    this.router.navigate(['admin']);
  }
}

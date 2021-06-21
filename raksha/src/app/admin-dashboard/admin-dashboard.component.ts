import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetails } from 'src/PersonalDetails.model';
import { AdminPanelDetails } from "src/admin-dashboard.model";
import { AdminService } from '../service/admin.service';
import { Insurance } from "src/insurance.model";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public usersList : PersonalDetails[]=[];
  public editUser: PersonalDetails=new PersonalDetails;
  public insuranceList : Insurance[]=[];
  public panelDetails :AdminPanelDetails= new AdminPanelDetails();
  constructor(private router:Router,private service : AdminService) { }

   ngOnInit() {
     this.service.getUsersList().then((data) => { this.usersList= data;});
     this.service.getAllInsuranceDetails().then((data) => { this.insuranceList= data;});
     this.service.getAdminPanelDetails().then((data)=>{this.panelDetails = data});
   }
   public searchUser(key: string): void {
    console.log(key);
    const results: PersonalDetails[] = [];
    for (const searchUser of this.usersList) {
      if (searchUser.fname.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || searchUser.mname.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || searchUser.lname.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || searchUser.gmail.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || searchUser.mobileNo.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       {
        results.push(searchUser);
      }
    }
    this.usersList = results;
    if (results.length === 0 || !key) {
      this.service.getUsersList().then((data) => { this.usersList= data;});
      console.log("invalid")
    }
  }

  public onDeleteUser(idToDelete: string): void {
    this.service.deleteUser(idToDelete).subscribe(
      (response: void) => {
        console.log(response);
        this.service.getUsersList().then((data) => { this.usersList= data;});
      }
    );
  }
}

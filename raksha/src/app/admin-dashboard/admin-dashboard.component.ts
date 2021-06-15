import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetails } from 'src/PersonalDetails.model';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public usersList : PersonalDetails[]=[];
  constructor(private router:Router,private service : AdminService) { }

   ngOnInit() {
     this.service.getUsersList().then((data) => { this.usersList= data;});
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
    }
  }
  /**public onUpdateUser(updateUser: PersonalDetails ): void {
    this.service.updateUser(updateUser).subscribe(
      (response: PersonalDetails) => {
        console.log(response);
        this.service.getUsersList().then((data) => { this.usersList= data;});
      }
    );
  }
**/
  public onDeleteUser(idToDelete: string): void {
    this.service.deleteUser(idToDelete).subscribe(
      (response: void) => {
        console.log(response);
        this.service.getUsersList().then((data) => { this.usersList= data;});
      }
    );
  }
}

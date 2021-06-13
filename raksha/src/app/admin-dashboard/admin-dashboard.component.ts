import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/admin.model';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public usersList : Admin[]=[];
  constructor(private router:Router,private service : AdminService) { }

   ngOnInit() {
     this.service.getUsersList().then((data) => { this.usersList= data;});
   }

}

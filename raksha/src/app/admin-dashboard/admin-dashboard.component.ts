import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public usersList : string[]=[];
  constructor(private router:Router,private service : AdminService) { }

  async ngOnInit() {
    (await this.service.getUsersList()).subscribe(data => this.usersList= data)
    }
  

}

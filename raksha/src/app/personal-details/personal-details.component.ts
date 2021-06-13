import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
 
  user: User = new User();
  constructor(private router: Router,private service:UserService) { }

  ngOnInit(): void {
  }
 save(){
  this.service.addUser(this.user)

 
  this.router.navigate(['payment']);
 }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  user: User = new User();
  constructor(private router: Router,private service:UserService) { }

  ngOnInit(): void {
  }
  save(){
    this.service.addUser(this.user)
    this.router.navigate(['admin']);
   }
}

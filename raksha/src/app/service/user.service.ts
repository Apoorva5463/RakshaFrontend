import { Injectable } from '@angular/core';
import { User } from 'src/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = "http://localhost:8888" ;
  constructor(private http: HttpClient) { }
  addUser(u: User){
    this.http.post(this.baseUrl+"/add",u).subscribe((data:any) => data = u);
  }
}

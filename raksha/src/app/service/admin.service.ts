import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from "src/admin.model";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl : string = "http://localhost:8888" ;
  constructor(private http: HttpClient) { }
  public async getUsersList()  {
      return await this.http.get<Admin[]>(this.baseUrl + "/users").toPromise();
    };
    }


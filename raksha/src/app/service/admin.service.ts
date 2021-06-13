import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl : string = "http://localhost:8888" ;
  constructor(private http: HttpClient) { }
  public async getUsersList()  {
    return this.http.get<string[]>(this.baseUrl + "/users")
    }
}

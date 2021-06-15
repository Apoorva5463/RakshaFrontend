import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Udash } from "src/udash.model";
import { PersonalDetails } from 'src/PersonalDetails.model';
@Injectable({
  providedIn: 'root'
})
export class UdashService {
  baseUrl: string = "http://localhost:8888";
  constructor(private http: HttpClient) { }
  public async getInsuranceDetail() {
    return await this.http.get<Udash[]>(this.baseUrl + "/insurancesByUser/10").toPromise();
  };

  public async getUserDetail() {
    return await this.http.get<PersonalDetails>(this.baseUrl + "/user/10").toPromise();
  };

}
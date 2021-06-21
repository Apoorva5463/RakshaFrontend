import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from "src/insurance.model";
import { PersonalDetails } from 'src/PersonalDetails.model';
import { GetUrl } from "src/getUrl.model";
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  baseUrl: string = "http://localhost:8888";
  constructor(private http: HttpClient) { }
  public async getInsuranceDetail() {
    return await this.http.get<Insurance[]>(this.baseUrl + "/insurancesByUser/10").toPromise();
  };


  public async getUserDetail() {
    return await this.http.get<PersonalDetails>(this.baseUrl + "/user/10").toPromise();
  };
  public async getDownloadUrl(id: number) {
     return await this.http.get<GetUrl>(this.baseUrl + "/getDownloadUrl/"+id).toPromise();
  };

}
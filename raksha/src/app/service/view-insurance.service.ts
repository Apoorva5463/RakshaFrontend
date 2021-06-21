import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurance } from 'src/insurance.model';
import { PersonalDetails } from 'src/PersonalDetails.model';
import { Vehicle } from "src/vehicle.model";

@Injectable({
  providedIn: 'root'
})
export class ViewInsuranceService {
  baseUrl: string = "http://localhost:8888";
  constructor(private http: HttpClient) { }
  public async getUsersById(id:string) {
    return await this.http.get<PersonalDetails>(this.baseUrl + "/user/"+id).toPromise();
  };
  public async getInsuranceById(id:string) {
    return await this.http.get<Insurance>(this.baseUrl + "/insurance/"+id).toPromise();
  };
  public async getVehicleById(vehicleTypeId:string) {
    return await this.http.get<Vehicle>(this.baseUrl +vehicleTypeId).toPromise();
  };
}
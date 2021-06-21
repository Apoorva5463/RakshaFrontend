import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from 'src/Bike.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  baseUrl : string = "http://localhost:8888" ;
  constructor(private http: HttpClient) { }
  
  public async getBrandList()  {
    return this.http.get<string[]>(this.baseUrl + "/getBikeBrands").toPromise();
    }
    public  async getModelFromBrand(selectedBrand:string){
      selectedBrand = selectedBrand.replace(" ","_");
       return this.http.get<string[]>(this.baseUrl+"/getBikeModelFromBrand/" +selectedBrand).toPromise();
     }
     public getBikeId(bike : Bike){
      this.http.post(this.baseUrl+"/getBikeId",bike).subscribe((data:any) => data=bike );
    }
}

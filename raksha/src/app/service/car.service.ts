import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 
  baseUrl : string = "http://localhost:8888" ;
 
   constructor(private http: HttpClient ) {} 
  
   public async getBrandList()  {
    return this.http.get<string[]>(this.baseUrl + "/getBrands").toPromise();
    }
    public  async getModelFromBrand(selectedBrand:string){
      return this.http.get<string[]>(this.baseUrl+ "/getModelFromBrand/" +selectedBrand).toPromise();
    }
    
}

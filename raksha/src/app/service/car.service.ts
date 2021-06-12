import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getbrandList() {
    throw new Error('Method not implemented.');
  }
  baseUrl : string = "http://localhost:8888" ;
 
   constructor(private http: HttpClient ) {} 
  
   public async getBrandList()  {
    return this.http.get<string[]>(this.baseUrl + "/getBrands").toPromise();
    }
    
}

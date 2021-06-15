import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl : string = "http://localhost:8888" ;
 
   constructor(private http: HttpClient ) {} 
  
   public async getbrandlist()  {
    return this.http.get<string[]>(this.baseUrl + "/getBrands")
    }
 
}

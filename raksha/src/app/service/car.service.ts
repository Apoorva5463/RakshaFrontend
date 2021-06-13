import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 
  baseUrl : string = "http://localhost:8888" ;
 
   constructor(private http: HttpClient ) {} 
  
   public async getBrandList()  {
    return this.http.get<string[]>(this.baseUrl + "/getCarBrands").toPromise();
    }
    public  async getModelFromBrand(selectedBrand:string){
      // selectedBrand = selectedBrand.replace(" ","_");
       return this.http.get<string[]>(this.baseUrl+"/getCarModelFromBrand/" +selectedBrand).toPromise();
     }
     public  async getCarVariantFromBrandModel(selectedBrand:string,selectedModel:string){
      // selectedBrand = selectedBrand.replace(" ","_");
      selectedModel=selectedModel.replace(" ","_");
       return this.http.get<string[]>(this.baseUrl+"/getCarVariantFromBrandModel/" +selectedBrand+"/"+selectedModel).toPromise();
     }
   
    
}

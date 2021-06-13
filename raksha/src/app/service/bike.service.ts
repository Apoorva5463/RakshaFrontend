import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  baseUrl : string = "http://localhost:8888" ;
  constructor(private http: HttpClient) { }
}

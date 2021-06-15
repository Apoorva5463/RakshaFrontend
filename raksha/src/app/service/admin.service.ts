import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalDetails } from "src/PersonalDetails.model";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = "http://localhost:8888";
  constructor(private http: HttpClient) { }
  public async getUsersList() {
    return await this.http.get<PersonalDetails[]>(this.baseUrl + "/users").toPromise();
  };
  /**public updateUser(updateUser: PersonalDetails): Observable<PersonalDetails> {
    return this.http.put<PersonalDetails>(`${this.baseUrl}/`, updateUser);
  }**/
  public deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/del/${userId}`);
  }
}


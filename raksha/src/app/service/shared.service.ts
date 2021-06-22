import { Injectable } from '@angular/core';
import { LoginDetails } from 'src/Login-details.model';
import { SharedItem } from 'src/shared-item.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedData: {[dst: string] : SharedItem}= {};
loginDetails:LoginDetails=new LoginDetails();
  constructor() { 

  }
  getLoginDetails(){
    return this.loginDetails;
  }
  setLoginDetails(data:LoginDetails){
    this.loginDetails = data;
  }
  getSharedData(dst:string): SharedItem{
    return this.sharedData[dst];
  }

  setSharedData(dst: string, sharedDataItem: SharedItem){
    this.sharedData[dst] = sharedDataItem;
  }
}
import { Injectable } from '@angular/core';
import { SharedItem } from 'src/shared-item.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedData: {[dst: string] : SharedItem}= {};

  constructor() { 

  }

  getSharedData(dst:string): SharedItem{
    return this.sharedData[dst];
  }

  setSharedData(dst: string, sharedDataItem: SharedItem){
    this.sharedData[dst] = sharedDataItem;
  }
}
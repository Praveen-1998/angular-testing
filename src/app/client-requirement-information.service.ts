import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {backendUrl} from './config';

@Injectable({
  providedIn: 'root'
})
export class ClientRequirementInformationService {
  postclientRequirementInformation(value: any) {
    return this.http.post(`${backendUrl}/postClientRequirementInformation`,value);
  }

  constructor(private http:HttpClient ) { }

  // getclientRequirementInformation(){
  //   return this.http.get(`${backendUrl}/getClientRequirementInformation`);
  // }

}

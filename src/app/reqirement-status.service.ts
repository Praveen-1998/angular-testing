import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from './config';

@Injectable({
  providedIn: 'root'
})
export class ReqirementStatusService {

  constructor(private http: HttpClient) { }

  postrequirementStatus(value: any){
    return this.http.post(`${backendUrl}/postrequirementStatus`,value);
  }


}

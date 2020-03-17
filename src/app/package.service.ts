import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { backendUrl } from '../app/config';


@Injectable({
  providedIn: 'root'
})
export class PackageService {
  // TargetInfo: any = [];




  constructor(private http: HttpClient , private router: Router) {
    // this.getTargetInfoOfTheYear(); 
  }

  postBillableEmployeesPackageDetails(BillableEmployeesPackageDetails) {
    return this.http.post(`${backendUrl}/postBillableEmployeesPackageDetails`, BillableEmployeesPackageDetails);
  }

  getBillableEmployeesPackageDetails() {
    return this.http.get(`${backendUrl}/getBillableEmployeesPackageDetails`);
  }
  getBillableEmployeesRevenueDetails() {
    return this.http.get(`${backendUrl}/getBillableEmployeesRevenueDetails`);
  }

  getTargetInfoOfTheYear() {
  return this.http.get(`${backendUrl}/getTargetInfoOfTheYear`);
  }

}

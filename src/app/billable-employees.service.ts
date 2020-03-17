import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from '../app/config';


@Injectable({
  providedIn: 'root'
})
export class BillableEmployeesService {
  count: any;

  constructor(private http: HttpClient) {
    this.getBillableEmployeesDetailsCount();
  }

stack: any;

  postBillableEmployeesDetails(BillableEmployeesDetails) {
    return this.http.post(`${backendUrl}/postBillableEmployeesDetails`, BillableEmployeesDetails);
  }

  getBillableEmployeesDetails() {
    return this.http.get(`${backendUrl}/getBillableEmployeesDetails`);
  }

  getBillableEmployeesDetailsCount() {
    return this.http.get(`${backendUrl}/getBillableEmployeesDetailsCount`);
  }
  getBillableEmployeesExpDetails() {
    return this.http.get(`${backendUrl}/getBillableEmployeesExpDetails`);
  }

  postBillableEmployeesPackageDetails(BillableEmployeesPackageDetails) {
    return this.http.post(`${backendUrl}/postBillableEmployeesPackageDetails`, BillableEmployeesPackageDetails);
  }
}

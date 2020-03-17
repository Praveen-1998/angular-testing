import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { backendUrl } from '../app/config';


@Injectable({
  providedIn: 'root'
})
export class NonBillableService {

  constructor(private http: HttpClient , private router: Router) { }

getNonBillableEmployeesDetails() {
  return this.http.get(`${backendUrl}/getNonBillableEmployeesDetails`);
}

getTechnologyNonBillableEmployeesDetails() {
  return this.http.get(`${backendUrl}/getTechnologyNonBillableEmployeesDetails`);
}

getNonBillableEmployeesExpDetails() {
  return this.http.get(`${backendUrl}/getNonBillableEmployeesExpDetails`);
}
}

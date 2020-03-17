import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { backendUrl } from '../app/config';


@Injectable({
  providedIn: 'root'
})
export class ShowimageService {
  billableEmpCount: any = [];
  billableEmpList: any = [];
  billableEmpListWrtClientName: any = [];
  billableEmpFresherAndExpList: any = [];
  billableEmpCountAndProfitWrtYear: any = [];
  billableEmpListWrtStack: any = [];
  billableEmployeesExp: any = [];


  constructor(private http: HttpClient , private router: Router) {
    this.showImage();
    // this.getBillableEmpwrtClient('clientName' , 'clientId');
    this.getBillableEmpwrtClientIdIntoTable('clientId');
   }

  showImage(): Observable<any> {
    return this.http.get(`${backendUrl}/getimage`);
  }


  getBillableEmpCountwrtClient() {
  return this.http.get(`${backendUrl}/getBillableEmpCountwrtClient`);
  }

getBillableEmpwrtClient(clientName , clientId, ClientName) {
console.log(clientName , clientId, ClientName);
this.http.get(`${backendUrl}/getBillableEmpwrtClientName/${clientName}`).subscribe(BillableEmpListWrtClientName => {
this.billableEmpListWrtClientName = BillableEmpListWrtClientName;
this.http.get(`${backendUrl}/getBillableEmpFresherAndExpList/${clientId}`).subscribe(BillableEmpFresherAndExpList => {
this.billableEmpFresherAndExpList = BillableEmpFresherAndExpList;
this.http.get(`${backendUrl}/getBillableEmpCountAndProfitWrtYear/${ClientName}`).subscribe(BillableEmpCountAndProfitWrtYear => {
console.log('BillableEmpCountAndProfitWrtYear service        ', BillableEmpCountAndProfitWrtYear);
this.billableEmpCountAndProfitWrtYear = BillableEmpCountAndProfitWrtYear;
// console.log('BillableEmpCountAndProfitWrtYear service        ', this.billableEmpCountAndProfitWrtYear);
this.router.navigateByUrl('/clientsdata');
});
});
}, err => {
  console.log(err);
}, () => {
  console.log('We got Billable Employee List , count and profit Wrt ClientName into service');
});
}




getBillableEmpwrtClientIdIntoTable(clientId) {
  return this.http.get(`${backendUrl}/getBillableEmpwrtClientId/${clientId}`).subscribe(getBillableEmpwrtClientIdIntoTable => {
    console.log(getBillableEmpwrtClientIdIntoTable);
    this.billableEmpList = getBillableEmpwrtClientIdIntoTable;
   } , err => {
     console.log(err);
   }, () => {
     console.log('count and stack got successfully based on the clientname');
   });
}

getBillableEmpwrtTechnologyIntoTable(stack) {
  return this.http.get(`${backendUrl}/getBillableEmpwrtTechnology/${stack}`).subscribe(getBillableEmpwrtTechnologyIntoTable => {
    // console.log(getBillableEmpwrtTechnologyIntoTable, 'getBillableEmpwrtTechnologyIntoTable');
    this.billableEmpListWrtStack = getBillableEmpwrtTechnologyIntoTable;
    this.router.navigateByUrl('/packageDetailsbillEmp');
   } , err => {
     console.log(err);
   }, () => {
     console.log('Billable employees details with respect to stack');
   });
}
getBillableEmployeesWithExp(exp) {
  return this.http.get(`${backendUrl}/getBillableEmpwrtExperience/${exp}`).subscribe(getBillableEmpwrtExpIntoTable => {
    // console.log(getBillableEmpwrtTechnologyIntoTable, 'getBillableEmpwrtTechnologyIntoTable');
    this.billableEmpListWrtStack = getBillableEmpwrtExpIntoTable;
    this.router.navigateByUrl('/packageDetailsbillEmp');
   } , err => {
     console.log(err);
   }, () => {
     console.log('Billable employees details with respect to Experience');
   });
}


getOverAllBillableEmpFresherAndExpList() {
  return this.http.get(`${backendUrl}/getOverallBillableEmpFresherAndExpList`);
}
}

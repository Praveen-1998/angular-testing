import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeToProjectService {

  

 
  empListByTechnology: any;
  constructor(private http: HttpClient) { }

// getempName():Observable<any>{
//   return this.urlTech.get<any>(this.urlTech)
// }
 
  // employeeId(id) {

  //   return this.http.get(`${this.urlTech}/${id}`).subscribe(res => {
     
  //     console.log(res);
  //   }, err => {
  //     console.log(err)
  //   }, () => {
  //     console.log('Employee details with respect to stack got scccessfully')
  //   });
  // }
}

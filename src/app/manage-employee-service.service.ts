import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManageEmployeeServiceService {
  backEndUrl = 'http://10.10.12.243:8082';
  constructor(private http: HttpClient, private router: Router) { }

  getUserDetails(username) {
    console.log(username);
    return this.http.get(`${this.backEndUrl}/getEmployeeDetailByName/${username}`);
  }
  postProjectDetails(details) {
    console.log(details);
    return this.http.post(`${this.backEndUrl}/project/add`, details);
  }

  getAllClients() {
    return this.http.get(`${this.backEndUrl}/getAllClients`);
  }
}

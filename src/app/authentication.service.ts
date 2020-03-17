import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendUrl } from '../app/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  message: string;
  error: string;
  constructor(private http: HttpClient) { }



  registerUser(userDetails): Observable<any> {
    return this.http.post<any>(`${backendUrl}/users/register`, userDetails);
  }

  loginUser(userCreadentials): Observable<any> {
    return this.http.post<any>(`${backendUrl}/users/login`, userCreadentials);
  }
}

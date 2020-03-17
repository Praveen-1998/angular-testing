import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendUrl } from '../app/config';


@Injectable({
  providedIn: 'root'
})
export class ClientsDetailsService {
  clientsDetails: any;

  constructor(private http: HttpClient) {
   }

  postClientDetails(details, imagename): Observable<any> {
    console.log(details.clientName);
    const obj = {
      details,
      imagename
    };
    console.log(obj);
    return this.http.post(`${backendUrl}/postClientDetails`, obj);
  }



  getClientsDetails() {
  return this.http.get(`${backendUrl}/getClientDetails`);
      }

  updateClientDetails(clientsDetails): Observable<any> {
    const obj = {
      clientsDetails
    };
    return this.http.post(`${backendUrl}/updateClientDetails`, obj);
      }

    deleteClientdetails(id) {
    return this.http.delete(`${backendUrl}/deleteClientDetails/${id}`);

    }
}

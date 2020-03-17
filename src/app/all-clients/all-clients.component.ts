import { Component, OnInit } from '@angular/core';
import { ManageEmployeeServiceService } from '../manage-employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {
  allClientDetails: any;
  clients: any;

  constructor(private manageService: ManageEmployeeServiceService, private router: Router) {
    this.getAllClients();
    this.allClientDetails = [
      {
      clientId: 1,
      cfullname : 'jhui',
      gstin: 867786,
    },
    {
      clientId: 4,
      cfullname : 'jhui',
      gstin: 867786,
    },   {
      clientId: 4,
      cfullname : 'jhui',
      gstin: 867786,
    }
  ];
  }


  ngOnInit() {
  }

  getAllClients() {
    this.manageService.getAllClients().subscribe(clientsDetails => {
      console.log(clientsDetails);
      this.allClientDetails = clientsDetails['data'];
      console.log(this.allClientDetails);
    });
  }
  particularRow(details) {
    console.log(details);
    // this.clients = details;
    localStorage.setItem('clientId', JSON.stringify(details));
    this.router.navigate(['/new-create-project']);
  }

}

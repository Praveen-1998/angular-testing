import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientRequirementInformationService } from '../client-requirement-information.service';

@Component({
  selector: 'app-client-requirement-information',
  templateUrl: './client-requirement-information.component.html',
  styleUrls: ['./client-requirement-information.component.css']
})
export class ClientRequirementInformationComponent implements OnInit {
  ClientRequirementInformationService: any;
  ngOnInit() {
  }

  constructor(private clientrequirementinformationservice: ClientRequirementInformationService) { }
  
  clientRequirementInformation(form: NgForm) {
    console.log(form.value);
    this.clientrequirementinformationservice.postclientRequirementInformation(form.value).subscribe((data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    },()=>{
      console.log('Client information got successfully')
    });
    console.log(JSON.stringify(form));
  }
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReqirementStatusService } from '../reqirement-status.service';

@Component({
  selector: 'app-requirement-status',
  templateUrl: './requirement-status.component.html',
  styleUrls: ['./requirement-status.component.css']
})
export class RequirementStatusComponent implements OnInit {

  constructor(private reqirementStatusService: ReqirementStatusService ) { }

  ngOnInit() {
  }
  requirementStatus(form: NgForm) {
    console.log(form.value);
    this.reqirementStatusService.postrequirementStatus(form.value).subscribe((data)=>{
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

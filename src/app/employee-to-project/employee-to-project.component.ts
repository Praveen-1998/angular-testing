import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-to-project',
  templateUrl: './employee-to-project.component.html',
  styleUrls: ['./employee-to-project.component.css']
})
export class EmployeeToProjectComponent implements OnInit {

  empolyeeToProjectForm: FormGroup;
  mydata: any;
  
   urlTech: String = 'http://10.10.12.244:8080/employee/employee';
 

  constructor(private fb: FormBuilder,private http:HttpClient) { }
   

  ngOnInit() {
    this.empolyeeToProjectForm = this.fb.group({
       employeeId: this.fb.control('', Validators.required),
      empName: this.fb.control('', Validators.required),
      empEmail: this.fb.control('', Validators.required),
      empPhNumber: this.fb.control('', Validators.required),
      projectId: this.fb.control('', Validators.required),
      projectEmailIdOfEmployee: this.fb.control('', Validators.required),
      billableType: this.fb.control('', Validators.required),
      bsd: this.fb.control('hzhzh', Validators.required),
      po: this.fb.control('', Validators.required),
      sow: this.fb.control('', Validators.required),
      wo: this.fb.control('', Validators.required),
    });
  }

  idPass(id){
    console.log(id.value)
    return this.http.get(`${this.urlTech}/${id.value}`).subscribe(res => {
      this.mydata = res;
      console.log(res);
      this.empolyeeToProjectForm = this.fb.group({
        empName: this.fb.control(this.mydata.employee.empName),
        empEmail: this.fb.control(this.mydata.employee.empEmail),
        empPhNumber: this.fb.control(this.mydata.employee.empPhNumber),
      })
    }, err => {
      console.log(err)
    }, () => {
      console.log('id sent scccessfully')
    });
  }
  get employeeId(): FormControl {
    return this.empolyeeToProjectForm.get('employeeId') as FormControl;
  }

  // get empName(): FormControl {
  //   return this.empolyeeToProjectForm.get('empName') as FormControl;
  // }
  // get empEmail(): FormControl {
  //   return this.empolyeeToProjectForm.get('empEmail') as FormControl;
  // }
  // get empPhNumber(): FormControl {
  //   return this.empolyeeToProjectForm.get('empPhNumber') as FormControl;
  // }
  get projectId(): FormControl {
    return this.empolyeeToProjectForm.get('projectId') as FormControl;
  }

  get projectEmailIdOfEmployee(): FormControl {
    return this.empolyeeToProjectForm.get('projectEmailIdOfEmployee') as FormControl;
  }

  get po(): FormControl {
    return this.empolyeeToProjectForm.get('po') as FormControl;
  }
  get sow(): FormControl {
    return this.empolyeeToProjectForm.get('sow') as FormControl;
  }get wo(): FormControl {
    return this.empolyeeToProjectForm.get('wo') as FormControl;
  }
  get  billableType(): FormControl {
    return this.empolyeeToProjectForm.get(' billableType') as FormControl;
  }
  get bsd(): FormControl {
    return this.empolyeeToProjectForm.get('bsd') as FormControl;
  }
  
  
 

  //  getempName() {
  //    this.urlTech.get().subscribe(Response=>{
  //     console.log(r)
  //   })
  //  }

  submitForm(){
    console.log(this.empolyeeToProjectForm.value);
    console.log(JSON.stringify(this.empolyeeToProjectForm.value));
    // this.empolyeeToProjectForm.reset();
  }



  }

  export interface employee{
    empName:string;
    empEmail:string;
    empPhNumber:number;
  }


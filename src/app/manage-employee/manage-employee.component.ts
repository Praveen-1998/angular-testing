import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ManageEmployeeServiceService } from '../manage-employee-service.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {
  myForm: FormGroup;
  userDetails: any;
  formData: any;
  table = false;
  form = true;
  constructor(private fb: FormBuilder, private manageService: ManageEmployeeServiceService) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      userName: this.fb.control(null, Validators.required),
      fullName: this.fb.control(null, Validators.required),
      tyEmployeeID: this.fb.control(null, Validators.required),
      mobileNo: this.fb.control(null, Validators.required),
      ourBussinessUnit: this.fb.control(null, Validators.required)
    });
    // this.formData = JSON.parse(localStorage.getItem('details'));
    // this.myForm.patchValue({
    //   userName: this.formData.userName,
    //   fullName: this.formData.fullName,
    //   tyEmployeeID: this.formData.tyEmployeeID,
    //   mobileNo: this.formData.mobileNo,
    //   ourBussinessUnit: this.formData.ourBussinessUnit,
    // });
  }
  get userName() {
    return this.myForm.get('userName') as FormControl;
  }
  get fullName() {
    return this.myForm.get('fullName') as FormControl;
  }
  get tyEmployeeID() {
    return this.myForm.get('tyEmployeeID') as FormControl;
  }
  get mobileNo() {
    return this.myForm.get('mobileNo') as FormControl;
  }
  get ourBussinessUnit() {
    return this.myForm.get('ourBussinessUnit') as FormControl;
  }

  fetchUserDetails(value) {
    console.log(value);
    this.manageService.getUserDetails(value).subscribe(details => {
      console.log(details['empDetails']);
      this.userDetails = details['empDetails'];
      this.userDetails.map(data => {
        console.log(data);
        this.myForm = this.fb.group({
          userName: this.fb.control(data.userName),
          fullName: this.fb.control(data.fullName),
          tyEmployeeID: this.fb.control(data.tyEmployeeID),
          mobileNo: this.fb.control(data.mobileNo),
          ourBussinessUnit: this.fb.control(data.ourBussinessUnit)
        });
      });
      this.table = true;
      this.form = false;
    }, err => {
      console.log(err);
    }, () => {
      console.log('details recieved successfully');
    });
  }
}

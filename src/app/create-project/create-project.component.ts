import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  myForm: FormGroup;
  showButton = false;
  constructor(private fb: FormBuilder) { }
  days: Array<any> = [
    { name: 'Add Holidays', value: 'Add Holidays' },
    { name: 'Add Saturdays', value: 'Add Saturdays' },
    { name: 'Add Sundays', value: 'Add Sundays' }
  ];

  projectVisi: Array<any> = [
    { name: 'private', value: 'private' },
    { name: 'public', value: 'public' },

  ];

  ngOnInit() {
    this.myForm = this.fb.group({
      projectName: this.fb.control(null, [Validators.required, Validators.pattern('[a-z A-Z ]*')]),
      client: this.fb.control(null, [Validators.required, Validators.pattern('[a-z A-Z ]*')]),
      ourCompany: this.fb.control(null, [Validators.required, Validators.pattern('[a-z A-Z ]*')]),
      taxLocation: this.fb.group({
        country: this.fb.control(null, [Validators.required, Validators.pattern('[a-z A-Z ]*')]),
        city: this.fb.control(null, [Validators.required, Validators.pattern('[a-z A-Z ]*')]),
        state: this.fb.control(null, [Validators.required]),
        sez: this.fb.control(null, [Validators.required]),
      }),
      businessSPOC: this.fb.array([
        this.businessDetails()
      ]),
      name: this.fb.control(null, [Validators.required]),
      contactNo: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      collectionOwner: this.fb.control(null, [Validators.required]),
      leavesAllowed: this.fb.control(null, [Validators.required]),
      addDays: this.fb.array([], [Validators.required]),
      invoiceDate: this.fb.control(null, [Validators.required]),
      projectVisibility: this.fb.array([], Validators.required),
      typesOfTax: this.fb.control('', Validators.required),
      HSNCode: this.fb.control('', Validators.required),
      InvoiceBillingType: this.fb.control('', Validators.required),
      paymentterms: this.fb.control('', Validators.required),
      Ourbankdetails: this.fb.control('', Validators.required),
      gstNo: this.fb.control('', Validators.required),
      pofile: this.fb.control(''),
      sowfile: this.fb.control(''),
      wofile: this.fb.control(''),
      courierAddress: this.fb.array([
        this.address()
      ]),
      attendanceCollectionDate: this.fb.control(null, [Validators.required]),
      invoiceApprovalAuthority: this.fb.control(null, [Validators.required]),
      description: this.fb.control(null),
      otherfile: this.fb.control('')
    });
  }
  address(): FormGroup {
    return this.fb.group({
      country: this.fb.control(null, [Validators.required]),
      fullName: this.fb.control(null, [Validators.required]),
      company: this.fb.control(null, [Validators.required]),
      address1: this.fb.control(null, [Validators.required]),
      address2: this.fb.control(null, [Validators.required]),
      city: this.fb.control(null, [Validators.required]),
      state: this.fb.control(null, [Validators.required]),
      pinCode: this.fb.control(null, [Validators.required]),
    });
  }

  businessDetails(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      contactNo: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
    });
  }

  get projectName() {
    return this.myForm.get('projectName') as FormControl;
  }
  get client() {
    return this.myForm.get('client') as FormControl;
  }
  get ourCompany() {
    return this.myForm.get('ourCompany') as FormControl;
  }
  get taxLocation() {
    return this.myForm.get('taxLocation') as FormGroup;
  }
  get country() {
    return this.myForm.get('country') as FormControl;
  }
  get city() {
    return this.myForm.get('city') as FormControl;
  }
  get state() {
    return this.myForm.get('state') as FormControl;
  }
  get sez() {
    return this.myForm.get('sez') as FormControl;
  }

  get name() {
    return this.myForm.get('name') as FormControl;
  }
  get contactNo() {
    return this.myForm.get('contactNo') as FormControl;
  }
  get email() {
    return this.myForm.get('email') as FormControl;
  }
  get collectionOwner() {
    return this.myForm.get('collectionOwner') as FormControl;
  }
  get leavesAllowed() {
    return this.myForm.get('leavesAllowed') as FormControl;
  }
  get addDays() {
    return this.myForm.get('addDays') as FormControl;
  }
  get invoiceDate() {
    return this.myForm.get('invoiceDate') as FormControl;
  }

  get typesOfTax() {
    return this.myForm.get('typesOfTax') as FormControl;
  }
  get HSNCode() {
    return this.myForm.get('HSNCode') as FormControl;
  }
  get InvoiceBillingType() {
    return this.myForm.get('InvoiceBillingType') as FormControl;
  }
  get paymentterms() {
    return this.myForm.get('paymentterms') as FormControl;
  }
  get Ourbankdetails() {
    return this.myForm.get('Ourbankdetails') as FormControl;
  }
  get gstNo() {
    return this.myForm.get('gstNo') as FormControl;
  }

  get attendanceCollectionDate() {
    return this.myForm.get('attendanceCollectionDate') as FormControl;
  }
  get invoiceApprovalAuthority() {
    return this.myForm.get('invoiceApprovalAuthority') as FormControl;
  }
  get description() {
    return this.myForm.get('description') as FormControl;
  }
  // to get the access to array's controls(fields)
  getBusinessSpoc(myForm) {
    return myForm.controls.businessSPOC.controls;
  }
  getCourierAddress(myform) {
    return myform.controls.courierAddress.controls;
  }




  onCheckboxChange(e) {
    const addDaysArray: FormArray = this.myForm.get('addDays') as FormArray;
    console.log(addDaysArray);
    if (e.target.checked) {
      addDaysArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      addDaysArray.controls.forEach((item: FormControl) => {
        console.log(item, 'item');
        if (item.value === e.target.value) {
          addDaysArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onCheckboxChange2(e) {
    const projectVisibilityArray: FormArray = this.myForm.get('projectVisibility') as FormArray;
    console.log(projectVisibilityArray);
    if (e.target.checked) {
      projectVisibilityArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      projectVisibilityArray.controls.forEach((item: FormControl) => {
        console.log(item, 'item');
        if (item.value === e.target.value) {
          projectVisibilityArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }




  submit() {
    console.log(this.myForm.value);
  }
  addAnotherBusinessItem() {
    (this.myForm.get('businessSPOC') as FormArray).push(this.businessDetails());
  }


  remove(i) {
    console.log(i);
    if (i <= 0) {
      this.showButton = true;
    }
    (this.myForm.get('businessSPOC') as FormArray).removeAt(i);
  }


}

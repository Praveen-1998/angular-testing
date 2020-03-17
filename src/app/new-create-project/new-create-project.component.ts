import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ManageEmployeeServiceService } from '../manage-employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-create-project',
  templateUrl: './new-create-project.component.html',
  styleUrls: ['./new-create-project.component.css']
})
export class NewCreateProjectComponent implements OnInit {

  myForm: FormGroup;
  showButton = false;
  clientID: any;
  constructor(private fb: FormBuilder, private manageService: ManageEmployeeServiceService, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(details => {
    //   console.log(details);
    //   this.clientID = details.ID;
    //   console.log(this.clientID);
    //   this.myForm = this.fb.group({
    //     clientId: console.log( this.fb.control(this.clientID))
    //   });
    // });
    this.clientID = JSON.parse(localStorage.getItem('clientId'));
    console.log(this.clientID);
    this.myForm = this.fb.group({
      clientId: this.fb.control(this.clientID)
    });
  }
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
      projectName: this.fb.control(null, [Validators.required]),
      clientId: this.fb.control(this.clientID, [Validators.required]),
      // ourCompany: this.fb.control(null, [Validators.required]),
      taxLocation: this.fb.group({
        country: this.fb.control(null, [Validators.required]),
        city: this.fb.control(null, [Validators.required]),
        state: this.fb.control(null, [Validators.required]),
        sez: this.fb.control(null, [Validators.required]),
      }),
      businessSpoces: this.fb.array([
        this.businessDetails()
      ]),
      financeSpoces: this.fb.array([
        this.financeDetails()
      ]),
      invoice: this.fb.group({
        collectionOwner: this.fb.control(null, [Validators.required]),
        leavesAllowed: this.fb.control(null, [Validators.required]),
        addDays: this.fb.control([], [Validators.required]),
        invoiceDate: this.fb.control(null, [Validators.required]),
        typeOfTask: this.fb.control('', Validators.required),
        hsnCode: this.fb.control('', Validators.required),
        invoiceBillingType: this.fb.control('', Validators.required),
        paymentTerms: this.fb.control('', Validators.required),
      }),
      bankDetails: this.fb.group({
        accNo: this.fb.control(null, [Validators.required]),
        accountHolderName: this.fb.control(null, [Validators.required]),
        ifscCode: this.fb.control([], [Validators.required]),
        gstNo: this.fb.control(null, [Validators.required]),
        micrCode: this.fb.control('', Validators.required),
      })
    });
  }

  businessDetails(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      contactNo: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
    });
  }
  financeDetails(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      contactNo: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
    });
  }

  get projectName() {
    return this.myForm.get('projectName') as FormControl;
  }
  get clientId() {
    return this.myForm.get('clientId') as FormControl;
  }
  // get ourCompany() {
  //   return this.myForm.get('ourCompany') as FormControl;
  // }
  get taxLocation() {
    return this.myForm.get('taxLocation') as FormGroup;
  }

  get invoice() {
    return this.myForm.get('invoice') as FormGroup;
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
    return myForm.controls.businessSpoces.controls;
  }
  getFinanceSpoc(myForm) {
    // console.log(myForm);
    return myForm.controls.financeSpoces.controls;
  }
  // getCourierAddress(myform) {
  //   return myform.controls.courierAddress.controls;
  // }

  submit() {
    console.log(this.myForm.value);
    this.manageService.postProjectDetails(this.myForm.value).subscribe(details => {
      console.log(details);
    });
  }
  addAnotherBusinessItem() {
    (this.myForm.get('businessSpoces') as FormArray).push(this.businessDetails());
  }
  removeBusinessItem(i) {
    console.log(i);
    if (i <= 0) {
      this.showButton = true;
    }
    (this.myForm.get('businessSpoces') as FormArray).removeAt(i);
  }

  addAnotherFinanceItem() {
    (this.myForm.get('financeSpoces') as FormArray).push(this.financeDetails());

  }
  removeFinanceItem(j) {
    console.log(j);
    if (j <= 0) {
      this.showButton = true;
    }
    (this.myForm.get('financeSpoces') as FormArray).removeAt(j);
  }




}

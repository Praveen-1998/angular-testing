import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }
   Data: Array<any> = [
    { name: 'private', value: 'private' },
    { name: 'public', value: 'public' },

  ];

  ngOnInit() {
    this.registerForm = this.fb.group({
      
      stage: this.fb.array([], Validators.required),
      typesOfTax: this.fb.control('', Validators.required),
      HSNCode: this.fb.control('', Validators.required),
      InvoiceBillingType: this.fb.control('', Validators.required),
      paymentterms: this.fb.control('', Validators.required),
      Ourbankdetails: this.fb.control('', Validators.required),
      gstNo: this.fb.control('', Validators.required),
      po: this.fb.control('', Validators.required),
      sow: this.fb.control('', Validators.required),
      wo: this.fb.control('', Validators.required),
      Country: this.fb.control('', Validators.required),
      fName: this.fb.control('', Validators.required),
      company: this.fb.control('', Validators.required),
      address1: this.fb.control('', Validators.required),
      address2: this.fb.control('', Validators.required),
      cTown: this.fb.control('', Validators.required),
      cState: this.fb.control('', Validators.required),
      bsd: this.fb.control('', Validators.required),
      invoiceApprovalAuthority: this.fb.control('', Validators.required),
      Description: this.fb.control('', Validators.required),
      otherAttachment: this.fb.control('', Validators.required),
    });
  }
  get stage(): FormArray {
    return this.registerForm.get('stage') as FormArray;
  }
  get typesOfTax(): FormControl {
    return this.registerForm.get('typesOfTax') as FormControl;
  }
  get HSNCode(): FormControl {
    return this.registerForm.get('HSNCode') as FormControl;
  }
  get InvoiceBillingType(): FormControl {
    return this.registerForm.get('InvoiceBillingType') as FormControl;
  }
  get paymentterms(): FormControl {
    return this.registerForm.get('paymentterms') as FormControl;
  }

  get gstNo(): FormControl {
    return this.registerForm.get('gstNo') as FormControl;
  }

  get po(): FormControl {
    return this.registerForm.get('po') as FormControl;
  }
  get sow(): FormControl {
    return this.registerForm.get('sow') as FormControl;
  }get wo(): FormControl {
    return this.registerForm.get('wo') as FormControl;
  }
  get Country(): FormControl {
    return this.registerForm.get('Country') as FormControl;
  }
  get fName(): FormControl {
    return this.registerForm.get('fName') as FormControl;
  }
  get company(): FormControl {
    return this.registerForm.get('company') as FormControl;
  }
  get address1(): FormControl {
    return this.registerForm.get('address1') as FormControl;
  }
  get address2(): FormControl {
    return this.registerForm.get('address2') as FormControl;
  }
  get cTown(): FormControl {
    return this.registerForm.get('cTown') as FormControl;
  }
  get cState(): FormControl {
    return this.registerForm.get('cState') as FormControl;
  }
  get bsd(): FormControl {
    return this.registerForm.get('bsd') as FormControl;
  }
  get invoiceApprovalAuthority(): FormControl {
    return this.registerForm.get('invoiceApprovalAuthority') as FormControl;
  }
  get Description(): FormControl {
    return this.registerForm.get('Description') as FormControl;
  }
  get otherAttachment(): FormControl {
    return this.registerForm.get('otherAttachment') as FormControl;
  }


  submitForm(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}

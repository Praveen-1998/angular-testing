import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.css']
})
export class CreateAttendanceComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      month: this.fb.control(null, [Validators.required]),
      year: this.fb.control(null , [Validators.required]),
      workedDays: this.fb.control(null , [Validators.required]),
      leavesTaken: this.fb.control(null , [Validators.required]),
      project: this.fb.control(null , [Validators.required]),
    });
  }


  get month() {
    return this.myForm.get('month') as FormControl;
  }
  get year() {
    return this.myForm.get('year') as FormControl;
  }
  get workedDays() {
    return this.myForm.get('workedDays') as FormControl;
  }
  get leavesTaken() {
    return this.myForm.get('leavesTaken') as FormControl;
  }
  get project() {
    return this.myForm.get('project') as FormControl;
  }
}

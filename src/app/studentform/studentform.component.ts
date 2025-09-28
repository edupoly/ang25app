import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-studentform',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css',
})
export class StudentformComponent {
  constructor(public fb: FormBuilder) {}
  studentForm!: FormGroup;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [],
      age: [],
      mobileNumbers: this.fb.array([]),
    });
  }
  get mobileNumbers() {
    return this.studentForm.get('mobileNumbers') as FormArray;
  }
  addMobileNumber() {
    this.mobileNumbers.push(this.fb.control([]));
  }
  show() {
    console.log(this.studentForm);
  }
}

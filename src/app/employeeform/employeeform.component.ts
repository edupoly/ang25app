import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-employeeform',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css',
})
export class EmployeeformComponent {
  employeeForm!: FormGroup;
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [],
      gender: [''],
      age: ['', this.checkAge],
      mobiles: this.fb.array([this.fb.control('')]),
    });
  }
  get mobiles() {
    return this.employeeForm.get('mobiles') as FormArray;
  }

  checkAge(control: FormControl) {
    let selectedGender = control.parent?.get('gender')?.value;
    let enteredAge = control.parent?.get('age')?.value;
    console.log(control);
    console.log(selectedGender);
    if (selectedGender) {
      console.log('object');
      if (selectedGender == 'male') {
        if (enteredAge < 25) {
          return { notEligible: true };
        }
      }
      if (selectedGender == 'female') {
        if (enteredAge < 23) {
          return { notEligible: true };
        }
      }
      return null;
    }
    return { selectGender: true };
  }
  addAnotherMobile() {
    this.mobiles.push(this.fb.control(''));
  }

  show() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
    } else {
      console.log(this.employeeForm.value);
    }
  }
}

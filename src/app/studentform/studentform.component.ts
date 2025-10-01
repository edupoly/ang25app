import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css',
})
export class StudentformComponent {
  studentForm!: FormGroup;
  constructor(public fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstname: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: this.fb.control([]),
      age: this.fb.control([]),
      address: this.fb.group({
        addressLine1: this.fb.control(''),
        addressLine2: [],
        city: this.fb.control(''),
      }),
    });
  }
  show() {
    console.log(this.studentForm);
    console.log(this.studentForm.value);
  }
  loadData() {
    this.studentForm.patchValue({
      firstname: 'ravi',
      lastname: 'hhais',
    });
  }
}

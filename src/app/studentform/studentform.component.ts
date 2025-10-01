import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule, NgIf, NgFor],
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
      mobiles: this.fb.array([this.fb.control([])]),
    });
  }
  get mobiles() {
    return this.studentForm.get('mobiles') as FormArray;
  }
  show() {
    console.log(this.studentForm);
    console.log(this.studentForm.value);
  }
  addMobile() {
    this.mobiles.push(this.fb.control([]));
  }
}

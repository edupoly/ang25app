import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { checkAge } from '../CustomValidators';
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
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: [],
      age: ['', [checkAge, Validators.required]],
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

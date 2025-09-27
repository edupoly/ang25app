import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css',
})
export class StudentformComponent {
  studentForm!: FormGroup;
  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.studentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: [''],
      age: ['', [this.checkMinor]],
      mobilenumbers: this.fb.array(['']),
      username: ['', [], []],
    });
  }
  get mobilenumbers() {
    return this.studentForm.get('mobilenumbers') as FormArray;
  }
  addMobile() {
    this.mobilenumbers.push(this.fb.control(''));
  }
  show() {
    console.log(this.studentForm.controls['firstname']);
    console.log(this.studentForm.value);
    console.log(this.studentForm.valid);
  }
  checkMinor(fc: FormControl) {
    console.log('fc', fc.value);
    if (fc.value < 23) {
      return { ageError: 'you are still minor' };
    } else {
      return null;
    }
  }
}

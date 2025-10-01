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
import { UserService } from '../user.service';

@Component({
  selector: 'app-studentform',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css',
})
export class StudentformComponent {
  studentForm!: FormGroup;
  constructor(public fb: FormBuilder, public userService: UserService) {}
  ngOnInit() {
    this.studentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: [],
      age: ['', [checkAge, Validators.required]],
      username: ['', [], [this.checkUsername.bind(this)]],
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
  checkUsername(control?: FormControl) {
    if (control?.value) {
      return this.userService.isUsernameTaken(control?.value);
    }
    return Promise.resolve({});
  }
}

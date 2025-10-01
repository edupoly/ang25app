import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-userform',
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  userForm!: FormGroup;
  constructor(public fb: FormBuilder, public us: UserService) {}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required], [this.checkUserName.bind(this)]],
    });
  }
  checkUserName(control: FormControl) {
    return this.us.checkUserNameTaken(control.value).pipe(
      map((data: any) => {
        return data['total'] ? { userNameTaken: true } : null;
      })
    );
    // return Promise.resolve(null);
  }
  show() {
    console.log(this.userForm.get('username'));
  }
}

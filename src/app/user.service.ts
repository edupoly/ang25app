import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}
  checkUserNameTaken(uname: string) {
    // https://dummyjson.com/users/filter?key=username&value=sophiab
    return this.http.get(
      `https://dummyjson.com/users/filter?key=username&value=${uname}`
    );
  }
}

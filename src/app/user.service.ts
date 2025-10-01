import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}
  isUsernameTaken(username: string) {
    return this.http
      .get(`https://dummyjson.com/users/filter?key=username&value=${username}`)
      .pipe(
        map((data: any) => {
          console.log(data);
          return data['total'] ? { userNameTaken: 'taken' } : null;
        })
      );
  }
}

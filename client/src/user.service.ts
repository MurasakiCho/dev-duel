import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Profile } from './app/Interfaces/Profile'
import { catchError, Observable, of, throwError } from 'rxjs';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*async inspectUser(username = 'andrew') {
    let data = await this.http.get<Profile[]>(inspectUserUrl + username).toPromise();
    console.log(data);
    return data;
  }*/

  inspectUser(username = 'andrew'): Observable<Profile> {
    return this.http.get<Profile>(inspectUserUrl + username)
      .pipe(
        catchError(this.handleError)
      );
  }

  /*async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http.get(duelUsersUrl + `username=${user1}&username=${user2}`).toPromise();
    console.log(data);
    return data;
  }*/

    duelUsers(user1 = 'fabpot', user2 = 'andrew'): Observable<Profile[]> {
      return this.http.get<Profile[]>(duelUsersUrl + `username=${user1}&username=${user2}`)
        .pipe(
          catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 404) {
        alert("Username not found.");
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      return throwError (() => new Error('Something went wrong.'));
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:string;

  constructor(private http: HttpClient) { }
  signUp(user:User): Observable<any> {
    return this.http.post<User>("http://127.0.0.1:8000/api/signup",user).pipe(
      catchError((error) => throwError(()=>{'An error occurred while sending data for signUp'}))
    );
  }

  login(user:User): Observable<any> {
    return this.http.post<User>("http://127.0.0.1:8000/api/login",user).pipe(

      catchError((error) => throwError(()=>{'An error occurred while sending data for login'}))
    )
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUser = environment.apiUser;


  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
     let headers=new HttpHeaders()
      return this.http.get<User[]>(this.apiUser).pipe(
        catchError((error) => throwError(()=>{'An error occurred while getting all items from the Api '}))
      );
    }


  getItem(id:number): Observable<User> {
    return this.http.get<User>(`${this.apiUser}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting an item from the Api'}))
    );
  }


  updateItem(user:User,id:number): Observable<any> {
    return this.http.post<User>(`${this.apiUser}/${id}`,user).pipe(
      catchError((error) => throwError(()=>{'An error occurred while updating an item from the Api'}))
    );
  }


  deleteItem(id:number): Observable<any> {
    return this.http.delete<User>(`${this.apiUser}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }


  createItem(user:User): Observable<any> {
    return this.http.post<User>(this.apiUser,user).pipe(
      catchError((error) => throwError(()=>{'An error occurred while creating an item from an Api'}))
    );
  }


}

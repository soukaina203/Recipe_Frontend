import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUser = environment.urlApi;

// NEED TO
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUser).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting all items from the Api '}))
      );
    }
    createItem(user:User): Observable<any> {
      return this.http.post<User>(this.apiUser,user).pipe(
        catchError((error) => throwError(()=>{'An error occurred while creating an item from an Api'}))
      );
    }


  getItem(id:string): Observable<User> {
    return this.http.get<User>(`${this.apiUser}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting an item from the Api'}))
    );
  }


  updateItem(id:string | null,user:User): Observable<any> {
    return this.http.patch<User>(`${this.apiUser}/${id}`,user).pipe(
      catchError((error) => throwError(()=>{'An error occurred while updating an item from the Api'}))
    );
  }


  deleteItem(id:number): Observable<any> {
    return this.http.delete<User>(`${this.apiUser}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }

  uploadImg(img:FormData,id:string| null): Observable<any> {
    return this.http.post<User>(`http://127.0.0.1:8000/api/Users/img/${id}`,img).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }



}

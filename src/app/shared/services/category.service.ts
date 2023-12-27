import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  readonly controller = 'Categories'

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.urlApi}/${this.controller}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting all items from the Api '}))
      );
    }
    getItem(id:string): Observable<Category> {
      return this.http.get<Category>(`${environment.urlApi}/${this.controller}/${id}`).pipe(
        catchError((error) => throwError(()=>{'An error occurred while getting an item from the Api'}))
      );
    }


    updateItem(id:string | null,Category:Category): Observable<any> {
      return this.http.patch<Category>(`${environment.urlApi}/${this.controller}/${id}`,Category).pipe(
        catchError((error) => throwError(()=>{'An error occurred while updating an item from the Api'}))
      );
    }

    createItem(Category:Category): Observable<any> {
      return this.http.post<Category>(`${environment.urlApi}/${this.controller}`,Category).pipe(
        catchError((error) => throwError(()=>{'An error occurred while creating an item from an Api'}))
      );
    }






  deleteItem(id:number): Observable<any> {
    return this.http.delete<Category>(`${environment.urlApi}/${this.controller}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }



}

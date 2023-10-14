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
  private apiCategories = environment.apiCategories;

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiCategories).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting all items from the Api '}))
      );
    }

    createItem(Category:Category): Observable<any> {
      return this.http.post<Category>(this.apiCategories,Category).pipe(
        catchError((error) => throwError(()=>{'An error occurred while creating an item from an Api'}))
      );
    }


  getItem(id:number): Observable<Category> {
    return this.http.get<Category>(`${this.apiCategories}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting an item from the Api'}))
    );
  }


  updateItem(Category:Category,id:number): Observable<any> {
    return this.http.post<Category>(`${this.apiCategories}/${id}`,Category).pipe(
      catchError((error) => throwError(()=>{'An error occurred while updating an item from the Api'}))
    );
  }


  deleteItem(id:number): Observable<any> {
    return this.http.delete<Category>(`${this.apiCategories}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }


}

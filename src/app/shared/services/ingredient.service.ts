import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  private apiIngredient = environment.apiIngredient;

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiIngredient).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting all items from the Api '}))
      );
    }
    createItem(Ingredient:Ingredient): Observable<any> {
      return this.http.post<Ingredient>(this.apiIngredient,Ingredient).pipe(
        catchError((error) => throwError(()=>{'An error occurred while creating an item from an Api'}))
      );
    }


  getItem(id:number): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.apiIngredient}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting an item from the Api'}))
    );
  }


  updateItem(Ingredient:Ingredient,id:number): Observable<any> {
    return this.http.post<Ingredient>(`${this.apiIngredient}/${id}`,Ingredient).pipe(
      catchError((error) => throwError(()=>{'An error occurred while updating an item from the Api'}))
    );
  }


  deleteItem(id:number): Observable<any> {
    return this.http.delete<Ingredient>(`${this.apiIngredient}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }




}

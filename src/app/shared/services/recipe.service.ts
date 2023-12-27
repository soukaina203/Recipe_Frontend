import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  readonly controller = 'Recipes'
    private http = inject(HttpClient)
    fetchData(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(`${environment.urlApi}/${this.controller}`)
    }
    getRecipe(id: number): Observable<Recipe> {
      return this.http.get<Recipe>(`${environment.urlApi}/${this.controller}/${id}`)
    }

    updateRecipe(id: string | null, data: Recipe): Observable<any> {
      return this.http.patch(`${environment.urlApi}/${this.controller}/${id}`, data)
    }

    SendData(Recipe: Recipe | object): Observable<any> {
      return this.http.post(`${environment.urlApi}/${this.controller}`, Recipe)
    }

    DeleteData(id: number | null): Observable<any> {
      return this.http.delete(`${environment.urlApi}/${this.controller}/${id}`)
    }
    uploadImg(img:FormData): Observable<any> {
      return this.http.post(`http://127.0.0.1:8000/api/Recipes/img`,img).pipe(
        catchError((e) => throwError(()=>{e}))
      );
    }
    FilteredRecipes():Observable<any> {
      return this.http.get(`http://127.0.0.1:8000/api/Recipes/FilteredRecipes`).pipe(
        catchError((e) => throwError(()=>{e}))
      );    }

    SearchRecipe(title:string):Observable<any> {
      return this.http.get(`${environment.urlApi}/${this.controller}/search/${title}`)

    }




}

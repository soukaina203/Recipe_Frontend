import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private http: HttpClient) { }

  private apiComment = environment.apiComment;

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiComment).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting all items from the Api '}))
      );
    }
    createItem(Comment:Comment): Observable<any> {
      return this.http.post<Comment>(this.apiComment,Comment).pipe(
        catchError((error) => throwError(()=>{'An error occurred while creating an item from an Api'}))
      );
    }


  getItem(id:number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiComment}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while getting an item from the Api'}))
    );
  }


  updateItem(Comment:Comment,id:number): Observable<any> {
    return this.http.post<Comment>(`${this.apiComment}/${id}`,Comment).pipe(
      catchError((error) => throwError(()=>{'An error occurred while updating an item from the Api'}))
    );
  }


  deleteItem(id:number): Observable<any> {
    return this.http.delete<Comment>(`${this.apiComment}/${id}`).pipe(
      catchError((error) => throwError(()=>{'An error occurred while deleting an item from the Api'}))
    );
  }




}


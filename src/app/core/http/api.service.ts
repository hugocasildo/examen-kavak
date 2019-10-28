import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Post } from '../shared/model/Post';


@Injectable({
  providedIn: 'root'
})

export class ApiService{

  /**
   * Url base donde se invocará al servicio.
   */
  apiURLBase: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  /**
   * Método para obtener y propagar el error generado por la llamada al servicio.
   * @param error Error de entrada
   */
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  /**
   * Servicio que obtine todos los posts.
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>( this.apiURLBase )
      .pipe(
        catchError(this.formatErrors)
      )
  }

  /**
   * Método que obtiene un post especifico.
   * @param id Id del post que se quiere recuperar
   */
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiURLBase}/${id}`)
      .pipe(
        catchError(this.formatErrors)
      )
  }

}

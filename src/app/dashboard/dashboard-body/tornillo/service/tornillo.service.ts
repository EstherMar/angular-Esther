import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Tornillo } from './tornillo';

@Injectable({ providedIn: 'root'})

  export class TornilloService {
    apiUrl = "./assets/json/tornillos.json";
    
    public constructor( private http: HttpClient ){}

    public getTornillos(): Observable<Tornillo[]> {
        return this.http.get<Tornillo[]>(this.apiUrl)
        .pipe(retry(1), catchError(this.handleError));
    }

    public agregarTornillo(tornillo: Tornillo): Observable<Tornillo> {
      const headers = new HttpHeaders().set('Content-Type','application/json');
      const body = JSON.stringify(tornillo); 
      return this.http.patch<Tornillo>(
       this.apiUrl, body,{'headers':  headers});
    }

    public deleteTornillo(tornillo: Tornillo) {
        return this.http
          .delete<Tornillo>(this.apiUrl)
          .pipe(retry(1), catchError(this.handleError));
      }

    public handleError(error: any) {
      let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
          return errorMessage;
        });
    }
  }
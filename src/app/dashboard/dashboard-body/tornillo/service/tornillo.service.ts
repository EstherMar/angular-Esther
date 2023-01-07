import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Tornillo } from './tornillo';

@Injectable({ providedIn: 'root'})

  export class TornilloService {
    apiUrl = "assets/json/tornillos.json";
    
    public constructor( private http: HttpClient ){}

    public getTornillos(): Observable<Tornillo[]> {
        return this.http.get<Tornillo[]>(this.apiUrl)
        .pipe(retry(1), catchError(this.handleError));
    }

    public agregarTornillo(tornillo: any): Observable<Tornillo[]> {
        return this.http.post<Tornillo[]>(
            this.apiUrl, JSON.stringify(tornillo))
    }

    public deleteTornillo(id: any) {
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
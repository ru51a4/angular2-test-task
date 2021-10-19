import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private options = {};

  constructor(
    private http: HttpClient
  ) {
  }

  public get(path: string, url): Observable<any> {
    return this.http
      .get( url + path)
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }

}

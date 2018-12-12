import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {


  private loginURL = "http://13.127.130.223:5000/login";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  login(loginData):Observable<object>{

     return this.http.post<object>(this.loginURL, loginData, this.httpOptions)
     .pipe(
       catchError(this.handleError('login'))
     );

  }

  // getMenuValue(menuDataParam):Observable<object>{
  //
  //    return this.http.post<object>(this.getMenuURL, menuDataParam, this.httpOptions)
  //    .pipe(
  //      catchError(this.handleError('getMenuValue'))
  //    );
  //
  // }



}

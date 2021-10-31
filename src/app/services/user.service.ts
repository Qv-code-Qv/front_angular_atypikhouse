import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserEntity } from '../models/register';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs'; // RxJS 6, à utiliser.





const AUTH_API = 'https://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin':'*', 
    'Authorization': sessionStorage.getItem('token')!
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private log(log: string) {
    console.info(log);
  }

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  constructor(private readonly https: HttpClient) { }
  /**
   * Permet d'afficher un user.
   * en le recherchant via son email.
   */

  /**
   * @param email
   * @returns 
   */

   getUser(email: string): Observable<any> {
    return this.https.get<IUserEntity[]>(`${AUTH_API}/api/users?email=${email}`, httpOptions).pipe(
      map(item => item[0]),
      catchError(this.handleError<IUserEntity[]>('getUser'))
    );
  }

}

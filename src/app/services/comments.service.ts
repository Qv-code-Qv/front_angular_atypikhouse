import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommentsEntity, IRegisterComments } from '../models/comments';

const AUTH_API = 'http://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': sessionStorage.getItem('token')!
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer un nouveau commentaire 
  * sur l'application
  */
  register(registerValues: IRegisterComments): Observable<any> {
    const body: ICommentsEntity = {
      comment: registerValues.comment,
      rating: registerValues.rating,
      date: registerValues.date,
      idBooking: `\/api\/bookings\/${registerValues.idBooking}`,
      idUser: `\/api\/users\/${registerValues.idUser}`,
    };

    return this.http.post(`${AUTH_API}/api/comments`, body, httpOptions);
  }

  /**
 * Permet de modifier un nouveau commentaire 
 * sur l'application
 */
  update(registerValues: IRegisterComments): Observable<any> {
    const body: ICommentsEntity = {
      comment: registerValues.comment,
      rating: registerValues.rating,
      date: registerValues.date,
      idBooking: `\/api\/bookings\/${registerValues.idBooking}`, 
      idUser: `\/api\/users\/${registerValues.idUser}`,
    };

    return this.http.put(`${AUTH_API}/api/comments`, body, httpOptions);
  }

  /**
 * Permet de récupérer la liste des commentaires.
 */
  getAllComments(): Observable<any> {
    return this.http.get(`${AUTH_API}/api/comments`, httpOptions);
  }

  /**
* Permet de supprimer la liste des commentaires.
*/
  deleteAllComments(): Observable<any> {
    return this.http.delete(`${AUTH_API}/api/comments`, httpOptions);
  }
}



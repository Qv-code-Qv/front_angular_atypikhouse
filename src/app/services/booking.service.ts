import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterBooking,IBookingEntity  } from '../models/booking';

const AUTH_API = 'http://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin':'*', 
    'Authorization': sessionStorage.getItem('token')!
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer un nouveau booking 
  * sur l'application
  */
 register(registerValues: IRegisterBooking): Observable<any> {
   const body: IBookingEntity = {
     status: registerValues.status,
     nbpersons: registerValues.nbpersons,
     datestart: registerValues.datestart,
     dateend: registerValues.dateend,
     idHouse: `\/api\/houses\/${registerValues.idHouse}`,
     idUser: `\/api\/users\/${registerValues.idUser}`,
   };

   return this.http.post(`${AUTH_API}/api/bookings`, body, httpOptions);
 }

   /**
  * Permet de modifier les bookings 
  * sur l'application
  */
    update(registerValues: IRegisterBooking): Observable<any> {
     const body: IBookingEntity = {
      status: registerValues.status,
      nbpersons: registerValues.nbpersons,
      datestart: registerValues.datestart,
      dateend: registerValues.dateend,
      idHouse: `\/api\/houses\/${registerValues.idHouse}`,
      idUser: `\/api\/users\/${registerValues.idUser}`, 
     };
 
     return this.http.put(`${AUTH_API}/api/bookings`, body, httpOptions);
   }

   /**
  * Permet de récupérer la liste des bookings.
  */
    getAllComments(): Observable<any> {
     return this.http.get(`${AUTH_API}/api/bookings`, httpOptions);
   }

     /**
  * Permet de supprimer la liste des bookings.
  */
  deleteAllComments(): Observable<any> {
   return this.http.delete(`${AUTH_API}/api/bookings`, httpOptions);
 }
}

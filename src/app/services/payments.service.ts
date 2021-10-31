import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterPayment,IPaymentEntity  } from '../models/payments';

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
export class PaymentsService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer un nouveau paiement 
  * sur l'application
  */
 register(registerValues: IRegisterPayment): Observable<any> {
   const body: IPaymentEntity = {
     status: registerValues.status,
     amount: registerValues.amount,
     date: registerValues.date,
     idBooking: `\/api\/bookings\/${registerValues.idBooking}`, // ? 
     idUser: `\/api\/users\/${registerValues.idUser}`, 
   };

   return this.http.post(`${AUTH_API}/api/payments`, body, httpOptions);
 }

   /**
  * Permet de modifier les paiements 
  * sur l'application
  */
    update(registerValues: IRegisterPayment): Observable<any> {
     const body: IPaymentEntity = {
      status: registerValues.status,
      amount: registerValues.amount,
      date: registerValues.date,
      idBooking: `\/api\/bookings\/${registerValues.idBooking}`, // ? 
      idUser: `\/api\/users\/${registerValues.idUser}`, 
     };
 
     return this.http.put(`${AUTH_API}/api/payments`, body, httpOptions);
   }

   /**
  * Permet de récupérer la liste des paiements.
  */
    getAllComments(): Observable<any> {
     return this.http.get(`${AUTH_API}/api/payments`, httpOptions);
   }

     /**
  * Permet de supprimer la liste des paiements.
  */
  deleteAllComments(): Observable<any> {
   return this.http.delete(`${AUTH_API}/api/payments`, httpOptions);
 }

}

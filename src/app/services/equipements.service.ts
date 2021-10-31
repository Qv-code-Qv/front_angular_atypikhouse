import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterEquipements,IEquipementsEntity  } from '../models/equipements';

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
export class EquipementsService {

  constructor(private readonly http: HttpClient) { }

  /**
  * Permet d'enregistrer un nouveau equipement 
  * sur l'application
  */
 register(registerValues: IRegisterEquipements): Observable<any> {
   const body: IEquipementsEntity = {
     name: registerValues.name, 
   };

   return this.http.post(`${AUTH_API}/api/equipements`, body, httpOptions);
 }

   /**
  * Permet de modifier les equipements 
  * sur l'application
  */
    update(registerValues: IRegisterEquipements): Observable<any> {
     const body: IEquipementsEntity = {
      name: registerValues.name,  
     };
 
     return this.http.put(`${AUTH_API}/api/equipements`, body, httpOptions);
   }

   /**
  * Permet de récupérer la liste des equipements.
  */
    getAllComments(): Observable<any> {
     return this.http.get(`${AUTH_API}/api/equipements`, httpOptions);
   }

     /**
  * Permet de supprimer la liste des equipemets.
  */
  deleteAllComments(): Observable<any> {
   return this.http.delete(`${AUTH_API}/api/equipements`, httpOptions);
 }

}

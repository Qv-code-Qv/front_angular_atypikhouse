import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact, IContactEntity } from '../models/contact';


const AUTH_API = 'https://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private readonly https: HttpClient) { }

  contact(contactValues: IContact): Observable<any> {
    const body: IContactEntity = {
      firstname: contactValues.firstname,
      lastname: contactValues.lastname,
      email: contactValues.email, 
      message: contactValues.message, 
    };
    return this.https.post(`${AUTH_API}/api/contact`, body, httpOptions);
  }

}

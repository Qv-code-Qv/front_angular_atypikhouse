import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterHouses, IHousesEntity } from '../models/houses';
import { IRegisterFile, IFileEntity } from '../models/file';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs'; // RxJS 6, à utiliser.
import { forkJoin } from 'rxjs';




const AUTH_API = 'https://localhost:8000';

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
export class HousesService {

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
  * Permet d'enregistrer un nouveau house 
  * sur l'application
  */
  registerHouse(registerValues: IRegisterHouses): Observable<any> {
    const body: IHousesEntity = {
      id: registerValues.id,
      title: registerValues.title,
      description: registerValues.description,
      address: registerValues.address,
      zipcode: registerValues.zipcode,
      city: registerValues.city,
      status: registerValues.status,
      nbbeds: registerValues.nbbeds,
      price: registerValues.price,
      tax: registerValues.tax,
      listidActivities: registerValues.listidActivities,
      listIdEquipements: registerValues.listIdEquipements,
      listidTags: registerValues.listidTags,
      dateDebut: registerValues.dateDebut,
      dateFin: registerValues.dateFin,
      categorie: registerValues.categorie,
      fileUrl: registerValues.fileUrl,
      idUser: `\/api\/users\/${registerValues.idUser}`,
    };

    return this.https.post(`${AUTH_API}/api/houses`, body, httpOptions);
  }

 

  /**
   * Permet de modifier les houses 
   * sur l'application
   */
  update(registerValues: IRegisterHouses): Observable<any> {
    const body: IHousesEntity = {
      id: registerValues.id,
      title: registerValues.title,
      description: registerValues.description,
      address: registerValues.address,
      zipcode: registerValues.zipcode,
      city: registerValues.city,
      status: registerValues.status,
      nbbeds: registerValues.nbbeds,
      price: registerValues.price,
      tax: registerValues.tax,
      listidActivities: registerValues.listidActivities,
      listIdEquipements: registerValues.listIdEquipements,
      listidTags: registerValues.listidTags,
      dateDebut: registerValues.dateDebut,
      dateFin: registerValues.dateFin,
      categorie: registerValues.categorie,
      fileUrl: registerValues.fileUrl,
      idUser: `\/api\/users\/${registerValues.idUser}`,
    };

    return this.https.put(`${AUTH_API}/api/houses`, body, httpOptions);
  }

  /**
   * Permet de récupérer la liste des houses.
   */
  getAllHouses(): Observable<any> {
    return this.https.get<IHousesEntity[]>(`${AUTH_API}/api/houses`, httpOptions).pipe(
      tap(items => {
        items.map(item => {
          item.fileUrl = `${AUTH_API}${item.fileUrl}`;
        });
      }),
      catchError(this.handleError<IHousesEntity[]>('getAllHouses', []))
    );
  }

  /* Affiche UNE SEULE house */ 
  /**
   * @param id 
   * @returns 
   */

  getHouse(id: number): Observable<any> {
    return this.https.get<IHousesEntity>(`${AUTH_API}/api/houses/${id}`).pipe(
      tap(item => {
        item.fileUrl = `${AUTH_API}${item.fileUrl}`;
      }),
      catchError(this.handleError<IHousesEntity>('getHouse'))
    );
  }

  /**
   * Permet de rechercher les appartements selon leur ville,
   * leur disponibilité, et leur nombre de lits.
   * @param city 
   * @param dateFin 
   * @param nbbeds 
   * @returns 
   */
  searchHouses(city: string, dateFin: Date, nbbeds: number): Observable<any> {
    // dans notre requête, on a des valeurs "non conformes". l'idée c'est de transformer la route en url.

    return this.https.get<IHousesEntity[]>(`${AUTH_API}/api/houses?city=${city}&dateFin[after]=${dateFin}&nbbeds[gte]=${nbbeds}&status=true`).pipe(
      tap(items => {
        items.map(item => {
          item.fileUrl = `${AUTH_API}${item.fileUrl}`;
        });
      }),
      catchError(this.handleError<IHousesEntity[]>('searchHouses', []))
    );
  }

  /**
   * Permet de supprimer la liste des houses.
   */
  deleteAllHouses(): Observable<any> {
    return this.https.delete(`${AUTH_API}/api/houses`, httpOptions);
  }


  /**
   * @param id 
   * @returns 
   */

  registerHouseFile(registerValues: IRegisterFile, id: number): Observable<any> {
    const body: IFileEntity = {
      file: registerValues.file,
    };

    return this.https.post(`${AUTH_API}/api/houses/${id}/image`, body, httpOptions);
  }  

}

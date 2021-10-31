export interface IRegisterBooking {
    status: boolean;
    nbpersons: number; 
    datestart: string;
    dateend: string; 
    idHouse: string;
    idUser: string;
  }

export interface IBookingEntity {
    status: boolean;
    nbpersons: number; 
    datestart: string;
    dateend: string; 
    idHouse: string;
    idUser: string;
}
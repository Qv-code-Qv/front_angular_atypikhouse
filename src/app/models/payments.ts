export interface IRegisterPayment {
    status: boolean;
    amount: number; 
    date: string;
    idBooking: string; 
    idUser: string;
  }

export interface IPaymentEntity {
  status: boolean;
  amount: number; 
  date: string;
  idBooking: string; 
  idUser: string;
}
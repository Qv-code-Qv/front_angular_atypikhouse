export interface IRegister {
    id:number;
    email: string;
    firstName: string; 
    lastName: string;
    address: string; 
    city: string;
    zipCode: number;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }

export interface IUserEntity {
  id:number;
  email: string;
  firstname: string; 
  lastname: string;
  address: string; 
  city: string;
  zipcode: number;
  phone: string;
  plainPassword: string;
}
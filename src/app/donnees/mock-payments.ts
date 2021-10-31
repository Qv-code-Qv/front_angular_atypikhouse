import { IPaymentEntity } from "../models/payments";
/*donnée fictif de comments */

export const PAYMENTS: IPaymentEntity[] = [
    {
        status: true,
        amount: 40, 
        date: "27:09:2021",
        idBooking: "1",
        idUser: "2",
    },

    {
        status: true,
        amount: 30, 
        date: "27:09:2021",
        idBooking: "2",
        idUser: "3",
    },

    {
        status: false,
        amount: 100, 
        date: "27:09:2021",
        idBooking: "5",
        idUser: "5",
    },

    {
        status: true,
        amount: 10, 
        date: "28:09:2021",
        idBooking: "7",
        idUser: "7",
    },

]
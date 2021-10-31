import { IBookingEntity } from "../models/booking";
/*donnée fictif de booking end */

export const BOOKING_END: IBookingEntity[] = [

    /**booking terminé*/
    {
        status: true,
        nbpersons: 2, 
        datestart: "14:09:2021",
        dateend: "18:09:2021",
        idHouse: "1",
        idUser: "1",
    },

    {
        status: true,
        nbpersons: 2, 
        datestart: "14:09:2021",
        dateend: "20:09:2021",
        idHouse: "2",
        idUser: "2",
    },

    {
        status: true,
        nbpersons: 2, 
        datestart: "20:09:2021",
        dateend: "22:09:2021",
        idHouse: "3",
        idUser: "3",
    }

];
import { IBookingEntity } from "../models/booking";
/*donnée fictif de booking start */

export const BOOKING_START: IBookingEntity[] = [

    /**booking terminé*/
    {
        status: false,
        nbpersons: 2, 
        datestart: "24:09:2021",
        dateend: "27:09:2021",
        idHouse: "1",
        idUser: "1",
    },

    {
        status: false,
        nbpersons: 4, 
        datestart: "24:09:2021",
        dateend: "26:09:2021",
        idHouse: "2",
        idUser: "2",
    },

    {
        status: false,
        nbpersons: 3, 
        datestart: "24:09:2021",
        dateend: "28:09:2021",
        idHouse: "3",
        idUser: "3",
    }

];
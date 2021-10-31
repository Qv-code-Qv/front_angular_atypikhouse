import { ICommentsEntity } from "../models/comments";
/*donnée fictif de comments */

export const COMMENTS: ICommentsEntity[] = [
    {
        comment: "tres belle endroit pour le weekend",
        rating: 5,
        date: "27:09:2021",
        idBooking: "1", 
        idUser: "1",
    },

    {
        comment: "tres belle endroit pour les vacances",
        rating: 5,
        date: "28:09:2021",
        idBooking: "2", 
        idUser: "2",
    },

    {
        comment: "cabane sympa et agréable dans la forêt",
        rating: 4,
        date: "27:09:2021",
        idBooking: "7", 
        idUser: "9",
    },

    {
        comment: "tres belle endroit pour le weekend",
        rating: 5,
        date: "30:09:2021",
        idBooking: "5", 
        idUser: "7",
    },
]
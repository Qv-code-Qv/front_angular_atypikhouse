import { IUserEntity } from "../models/register";
/*donnée fictif de comments */

export const USER: IUserEntity[] = [
    {   id: 1,
        email: "q.vilcoq@gmail.com",
        firstname: "vilcoque",
        lastname: "quentin",
        address: "23 rue labouret", 
        city: "colombes",
        zipcode: 92700,
        phone: "0635654858",
        plainPassword: "000000",
    },

    {
        id: 2,
        email: "j.vilcoq@gmail.com",
        firstname: "vilcoque",
        lastname: "janick",
        address: "23 rue de nantes", 
        city: "nantes",
        zipcode: 44400,
        phone: "0635654858",
        plainPassword: "000000",
    },

    {
        id: 3,
        email: "a.imbert@gmail.com",
        firstname: "imbert",
        lastname: "alison",
        address: "43 avanue de wagram", 
        city: "paris",
        zipcode: 75017,
        phone: "0635654858",
        plainPassword: "000000",
    },

    {
        id: 4,
        email: "m.goncalves@gmail.com",
        firstname: "goncalves",
        lastname: "mariline",
        address: "23 avenue des ternes", 
        city: "paris",
        zipcode: 75017,
        phone: "0635654858",
        plainPassword: "000000",
    },
]
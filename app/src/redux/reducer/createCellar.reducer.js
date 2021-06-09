// importer le nom de l'action qui est dans type.js

import { CREATE_CELLAR } from "../CreateCellarsAndZones/type";

const initCellar = {
    id:"",
    name:"",
    description:""
    
}; // initial state 

export const createCellar =(state=initCellar, action)=> {
    switch (action.type) {
       
        // si tu reçois une action de type LIST_BOTTLES retourne nous {...}
        case CREATE_CELLAR:

            const cellar = action.payload;  // payload = données reçue dans l'action
            // console.log(cellar._id); // log pour vérifier s'il retourne bien l'id de la cave
            return {
            ...state, 
            id:cellar._id,
            name:cellar.name,
            description:cellar.description,
          
        }
        default:
            return state;
         
    }
}

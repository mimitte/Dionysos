// importer le nom de l'action qui est dans type.js

import { CREATE_ZONE} from "../CreateCellarsAndZones/type";

const initZone = {}; // initial state 

export const createZoneReducer =(state=initZone, action)=> {
    switch (action.type) {
       
        // si tu reçois une action de type CREATE_ZONE retourne nous {...}
        case CREATE_ZONE:

            const zone = action.payload;  // payload = données reçue dans l'action
            console.log(" ma zone dans action", zone); // log pour vérifier s'il retourne bien l'id de la cave
            return {
            ...state, 
            name:zone.name,
            rows:zone.rows,
            columns:zone.columns,
            user:zone.user,
            name:zone.name,
            cellar:zone.cellar,   
        }
        default:
            return state;
         
    }
}

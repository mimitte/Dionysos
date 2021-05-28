// importer le nom de l'action qui est dans type.js
import { LIST_BOTTLES } from "./types";

const initListBottle = {}; // initial state 

export const listBottles =(state=initListBottle, action)=> {
    switch (action.type) {

        // si tu reçois une action de type LIST_BOTTLES retourne nous {...}
        case LIST_BOTTLES:

            const bouteilles = action.payload;  // payload = données reçue dans l'action
            
            return {
            ...state, 
            bouteilles,
            error: action.error,
            isLoaded: action.isLoaded
        }
    
        default:
            return state;
         
    }
}

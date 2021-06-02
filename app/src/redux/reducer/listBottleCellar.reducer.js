// importer le nom de l'action qui est dans type.js
import { LIST_BOTTLES } from "../ListBottlesCellar/types";
import { DELETE_BOTTLE } from "../deleteBottleCellar/type";
const initListBottle = {
    bouteilles: {},
    error:false,
    isLoaded:false
}; // initial state 

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

        // si tu reçois une action de type LIST_BOTTLES retourne nous {...}
        case DELETE_BOTTLE :
        // console.log("delete bouteille");
        return {
            ...state,
            bouteilles: state.bouteilles.filter(bouteille => bouteille._id !== action.payload)
        };
    
        default:
            return state;
         
    }
}

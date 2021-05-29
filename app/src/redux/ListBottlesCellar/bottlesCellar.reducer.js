// importer le nom de l'action qui est dans type.js
import { DELETE_BOTTLE } from "../deleteBottleCellar/type";
import { LIST_BOTTLES } from "./types";

const initListBottle = {}; // initial state 

 const bottlesCellarReducer =(state=initListBottle, action)=> {
    console.log("voici l'action",action);
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

        return {
            ...state ,
            bouteilles: state.bouteilles.filter(bouteille => bouteille.id !== action.payload)
        }
    
    
        default:
            return state;
         
    }
}

export default bottlesCellarReducer;
// importer le nom de l'action qui est dans type.js
import { LIST_BOTTLES } from "../ListBottlesCellar/types";
import { DELETE_BOTTLE } from "../deleteBottleCellar/types";
let initListBottle = {
    bouteilles: {},
    error:false,
    isLoaded:false
}; // initial state

export const bottlesCellarReducer =(state=initListBottle, action)=> {
    switch (action.type) {
        case LIST_BOTTLES:
            const bouteilles = action.payload; 
            return {
                ...state,
                bouteilles,
                error: action.error,
                isLoaded: action.isLoaded
            }

        case DELETE_BOTTLE :
            return {
                ...state,
                bouteilles: state.bouteilles.filter(bouteille => bouteille._id !== action.payload)
            };

        default:
            return state;
    }
}

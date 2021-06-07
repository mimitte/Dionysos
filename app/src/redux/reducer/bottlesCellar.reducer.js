// importer le nom de l'action qui est dans type.js
import { LIST_BOTTLES } from "../ListBottlesCellar/types";
import { DELETE_BOTTLE } from "../deleteBottleCellar/types";
import {creatFilterList} from "../../utils/filterBottles";
let initListBottle = {
    bouteilles: {},
    error:false,
    isLoaded:false,
    countries: [],
      regions: [],
      years:[],
      minYear: 0,
      maxYear: 0,
      colors: [
        "rouge",
        "blanc",
        "rosé"
      ]
}; // initial state

export const bottlesCellarReducer =(state=initListBottle, action)=> {
    switch (action.type) {
        case LIST_BOTTLES:
            const bouteilles = action.payload; 
            const filters = creatFilterList(bouteilles);
            console.log(filters);
            return {
                ...state,
                bouteilles,
                error: action.error,
                isLoaded: action.isLoaded,
                countries: filters[0].country,
                regions: filters[1].regions,
                years:filters[2].years,
                minYear: filters[3].minYear,
                maxYear: filters[4].maxYear
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

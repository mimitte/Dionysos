// importer le nom de l'action qui est dans type.js
import { LIST_BOTTLES } from "../ListBottlesCellar/types";
import { DELETE_BOTTLE } from "../deleteBottleCellar/types";
import {creatFilterList} from "../../utils/filterBottles";
import { LIST_ALL_ELEMENTS_OF_CELLARS} from "../getAllElements/types";
import { UPDATE_BOTTLE_TO_CELLAR } from "../updateBottleToCellar/types";
import { CREATE_CELLAR } from "../CreateCellarsAndZones/type"
let initListBottle = {
    bouteilles: [],
    error:false,
    isLoaded:false,
    allCellarsWithZones:[],
    isLoadedCellar:false,
    countries: [],
      regions: [],
      years:[],
      minYear: 0,
      maxYear: 0,
      colors: [
        "rouge",
        "blanc",
        "rosé"
      ],
};

export const bottlesCellarReducer =(state=initListBottle, action)=> {
    switch (action.type) {
        case LIST_BOTTLES:
            const bouteilles = action.payload;
            const filters = creatFilterList(bouteilles);
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
        case LIST_ALL_ELEMENTS_OF_CELLARS :
            const allCellarsWithZones = action.payload;
            console.log("LIST_ALL_ELEMENTS_OF_CELLARS",allCellarsWithZones);
            return {
                ...state,
                allCellarsWithZones: allCellarsWithZones,
                isLoadedCellar: action.isLoadedCellar,
            };
        case UPDATE_BOTTLE_TO_CELLAR :
            return {
                ...state,
                // bouteilles: state.bouteilles.filter(bouteille => bouteille._id !== action.payload)
            };
        case CREATE_CELLAR:
            // console.log(state.allCellarsWithZones);
            const allCellarsWithZonesTemp = { ...state.allCellarsWithZones };
            // console.log("cellars ds bottlereducer",allCellarsWithZonesTemp);
             allCellarsWithZonesTemp.cellars.push(action.payload);
            return {
                ...state,
                allCellarsWithZones:allCellarsWithZonesTemp,
            }
        default:
            return state;
    }
}

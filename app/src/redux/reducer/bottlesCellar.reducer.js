// importer le nom de l'action qui est dans type.js
import { LIST_BOTTLES } from "../ListBottlesCellar/types";
import { DELETE_BOTTLE } from "../deleteBottleCellar/types";
import {creatFilterList} from "../../utils/filterBottles";
import { LIST_ALL_ELEMENTS_OF_CELLARS} from "../getAllElements/types";
let initListBottle = {
    zonesCellar: [],
    idCellar: "",
    nameCellar : "",
    descriptionCellar:"",
    bottlesCellar :[],
    bouteilles: [],
    error:false,
    isLoaded:false,
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
            const data = action.payload;
            console.log(data.zonesCellar);
            console.log(data.bottlesCellar);
            return {
                ...state,
                idCellar: data.idCellar,
                nameCellar : data.nameCellar,
                descriptionCellar:data.descriptionCellar,
                zonesCellar: data.zonesCellar,
                isLoadedCellar:data.isLoaded,
                bottlesCellar: data.bottlesCellar
            };
        default:
            return state;
    }
}

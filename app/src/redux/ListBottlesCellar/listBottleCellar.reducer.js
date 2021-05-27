import { LIST_BOTTLES } from "./types";

const initListBottle = {
        // error:null,
        // isLoaded:false,
        // listBottles:{},
};
export const listBottles =(state=initListBottle, action)=> {
    switch (action.type) {
        case LIST_BOTTLES:
            const bouteilles = action.payload;
            // console.log("bouteilles via reducer", bouteilles);
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

import { LIST_BOTTLES } from "./types";

const initListBottle = {
        // error:null,
        // isLoaded:false,
        // listBottles:{},
};
export const listBottles =(state=initListBottle, action)=> {
    switch (action.type) {
        case LIST_BOTTLES:
            return {
            ...state,
            listBottles : action.payload, 
            error: action.error,
            isLoaded: action.isLoaded
        }
    
        default:
            return state;
         
    }
}

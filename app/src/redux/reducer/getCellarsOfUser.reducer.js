// importer le nom de l'action qui est dans type.js
import { CREATE_CELLAR } from "../CreateCellarsAndZones/type";
import { GET_CELLARS_OF_USER } from "../GetCellarsOfUser/type";
import { UPDATE_CELLAR } from "../updateCellar/type";

const InitCellarsOfUser = {
    cellarsOfUser:[],
    error:null
}; // initial state 

export const getCellarsOfUserReducer =(state=InitCellarsOfUser, action)=> {
    switch (action.type) {
       
        // si tu reçois une action de type GET_CELLARS_OF_USER retourne nous {...}
        case GET_CELLARS_OF_USER:
            const cellarsOfUser = action.payload;  // payload = données reçue dans l'action
            return {
                ...state,
                cellarsOfUser:cellarsOfUser
            }
        case CREATE_CELLAR:
            const cellar = [...state.cellarsOfUser];
            cellar.push(action.payload);
            return {
                ...state,
                cellarsOfUser:cellar,
            }
        case UPDATE_CELLAR:
            const allCellars = state.cellarsOfUser.filter(cellar=>cellar._id !== action.payload._id)
            allCellars.push(action.payload)
            return {
                ...state,
                cellarsOfUser:allCellars
            }

        default:
            return state;
    }
}

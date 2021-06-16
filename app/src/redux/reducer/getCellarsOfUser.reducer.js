// importer le nom de l'action qui est dans type.js
import { CREATE_CELLAR } from "../CreateCellarsAndZones/type";
import { GET_CELLARS_OF_USER } from "../GetCellarsOfUser/type";

const InitCellarsOfUser = {
    cellarsOfUser:[],
    error:null
}; // initial state 

export const getCellarsOfUserReducer =(state=InitCellarsOfUser, action)=> {
    switch (action.type) {
       
        // si tu reçois une action de type GET_CELLARS_OF_USER retourne nous {...}
        case GET_CELLARS_OF_USER:
            const cellarsOfUser = action.payload;  // payload = données reçue dans l'action
            console.log("cave récupérées dans le reducer",cellarsOfUser); // log pour vérifier s'il retourne bien l'id de la cave
            return {
                ...state,
                cellarsOfUser:cellarsOfUser
            }
        case CREATE_CELLAR:
            const cellar = [...state.cellarsOfUser];
            cellar.push(action.payload);
            console.log("cccc",cellar);
            return {
                ...state,
                cellarsOfUser:cellar,
            }

        default:
            return state;
    }
}

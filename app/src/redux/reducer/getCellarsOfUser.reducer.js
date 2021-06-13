// importer le nom de l'action qui est dans type.js
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
        default:
            return state;
    }
}

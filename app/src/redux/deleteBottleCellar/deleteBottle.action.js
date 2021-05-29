// ici on importe la constante qui contient le nom du type de l'action

import { DELETE_BOTTLE } from "./type";


/** fonction getAllBottles contient toute la logique de notre demande à la BD
 * Ici notre demande consiste à récupérer toutes les bouteilles ajoutées dans la cave
 * On exporte la fonction getAllBottles parce qu'on va l'importer dans le reducer
*/
export const deleteBottle =(id)=>{

    return async (dispatch)=>{

        await fetch(
            `http://localhost:5000/api/bottle/${id}.json`,
            {
                method: "DELETE"
            }
        )

        dispatch({ 
        type: DELETE_BOTTLE,
        payload: id,
        isLoaded:true,
        });
    }
           
}    


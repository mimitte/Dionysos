// ici on importe la constante qui contient le nom du type de l'action

import { DELETE_BOTTLE } from "./type";

/** fonction getAllBottles contient toute la logique de notre demande à la BD
 * Ici notre demande consiste à récupérer toutes les bouteilles ajoutées dans la cave
 * On exporte la fonction getAllBottles parce qu'on va l'importer dans le reducer
*/
export const deleteBottle =(id)=>{
    //  console.log("dans l'action delete", id);
    return (dispatch)=>{
        fetch(
            `http://localhost:5000/api/bottle/${id}`,
            {
                method: "DELETE"
            }
            
        ).then((result)=>{
            if (result) {
                dispatch({ 
                    type: DELETE_BOTTLE,
                    payload: id,
                    isLoaded:true,
                    });
                
            }
            console.log(result);
            
        })

        // catch(function(err) {

        //     console.log(err);
        //     return null;
        // });
       
        //il va dispatcher l'action comme quoi on a suppr une bouteille
        
    }          
}    


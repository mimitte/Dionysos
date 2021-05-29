// ici on importe la constante qui contient le nom du type de l'action
import { LIST_BOTTLES } from "./types";

/** fonction getAllBottles contient toute la logique de notre demande à la BD
 * Ici notre demande consiste à récupérer toutes les bouteilles ajoutées dans la cave
 * On exporte la fonction getAllBottles parce qu'on va l'importer dans le reducer
*/
export const getAllBottles =()=>{

    return async (dispatch)=>{
        return (
            await fetch("http://localhost:5000/api/bottle")
           .then(response => response.json())
           .then(
            (result) => {
              // ici on dit au reducer: dispatche-nous ton action qui s'appelle LIST_BOTTLES
              // si on utilise axios il faut faire result.data pour accéder au donnée
              dispatch({ 
                type: LIST_BOTTLES,
                payload: result,
                isLoaded:true,
              });
            },
            // Remarque : il est important de traiter les erreurs ici
            // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
            // des exceptions provenant de réels bugs du composant.
            (error) => {
              dispatch({
                error,
                isLoaded:true
             });
            }
          )
        )
    }
}

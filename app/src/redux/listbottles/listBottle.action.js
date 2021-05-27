// ici on créé l'action.type

import { LIST_BOTTLES } from "./types";

export const getAllBottles =()=>{

    return(dispatch)=>{
        return (
            fetch("http://localhost:5000/api/bottle")
           .then(response => response.json())
           .then(
            (result) => {
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

// ici on importe la constante qui contient le nom du type de l'action
import  {LIST_BOTTLES, LIST_BOTTLES_CELLAR} from "./types";
import isAuthenticated from "../../utils/isAuthenticated";

/** fonction getAllBottles contient toute la logique de notre demande à la BD
 * Ici notre demande consiste à récupérer toutes les bouteilles ajoutées dans la cave
 * On exporte la fonction getAllBottles parce qu'on va l'importer dans le reducer
*/
export const getAllBottles =()=>{

  if ( isAuthenticated() ) {

    let userId = localStorage.getItem('userId');

    return async (dispatch)=>{
      return (
        await fetch(`http://localhost:5000/api/bottle/user/${userId}`)
          .then(response => response.json())
          .then(
            (result) => {
              console.log("ttes bottles",result);
              dispatch({
                type: LIST_BOTTLES,
                payload: result,
                isLoaded:true,
              });
            },
            (error) => {
              dispatch({
                // error,
                // isLoaded:false
              });
            }
          )
      )
    }
  }
}

// ici on importe la constante qui contient le nom du type de l'action
import  {LIST_BOTTLES, LIST_BOTTLES_CELLAR} from "./types";

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
              dispatch({
                type: LIST_BOTTLES,
                payload: result,
                isLoaded:true,
              });
            },
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

// export const getAllBottlesToCellar =()=>{
//   return async (dispatch)=>{
//     await fetch("http://localhost:5000/api/bottle")
//     .then(response => response.json())
//     .then(

//     )
//   }
// }

// export const getCellar =(id)=>{
//   return async (dispatch)=>{
//     await fetch("http://localhost:5000/api/bottle")
//     .then(response => response.json())
//     .then(

//     )
//   }
// }

// ici on importe la constante qui contient le nom du type de l'action
import isAuthenticated from "../../utils/isAuthenticated";
import { GET_CELLARS_OF_USER } from "./type";

export const getCellarsOfUser =()=>{

  if ( isAuthenticated() ) {

    let userId = localStorage.getItem('userId');

    return async (dispatch)=>{
      return (
        await fetch(`http://localhost:5000/api/cellar/user/${userId}`)
          .then(response => response.json())
          .then(
            (result) => {
              dispatch({
                type:  GET_CELLARS_OF_USER,
                payload: result,
              });
            },
            (error) => {
              dispatch({
                error
              });
            }
          )
      )
    }
  }
}

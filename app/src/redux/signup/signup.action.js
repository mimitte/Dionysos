import { toast } from "react-toastify";
import { isEmpty } from "../../utils/isEmpty";
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS
} from "./signupTypes";


export const signupNewUser = (userData) => {
  console.log("blah here");
  return (dispatch) => {
    dispatch({ type: CREATE_USER_SUBMITTED });
    fetch(
      "http://localhost:5000/api/auth/signup",
      {
        method: 'POST',
        body: JSON.stringify(
          userData
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(
      result => result.json()
    ).then(
      
      json => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: json
        })

      }, error => {
        dispatch({
          type: CREATE_USER_ERROR,
          payload: error
        })
      }


    ).catch(error => console.log(error));
    
   } // set submitted state  // type: CREATE_USER_SUBMITTED
}
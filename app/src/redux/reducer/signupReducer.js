import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS
} from "../signup/signupTypes";
import { fowardMessages } from '../../utils/signupMessages';

// define the initial state of the signup store
const initialState = {
  emailError: "",
  passwordError: "",
  isSubimtted: false
};
let emailError = "";

// define how action will change the state of the store
export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUBMITTED:
      emailError = fowardMessages(true, CREATE_USER_SUBMITTED);
      return {
        emailError: emailError,
        passwordError: "passwd soumis",
        isSubimtted: true
      };
    case CREATE_USER_ERROR:
      emailError = fowardMessages(true, CREATE_USER_ERROR);
      const errorState = {
        emailError: emailError,
        passwordError: "password invalide",
        isSubimtted: false
      };
      if (action.errorData.hasOwnProperty("email")) {
        errorState.emailError = action.errorData["email"];
      }
      if (action.errorData.hasOwnProperty("password")) {
        errorState.passwordError = action.errorData["password"];
      }
      return errorState;
    case CREATE_USER_SUCCESS:
      emailError = fowardMessages(true, CREATE_USER_SUCCESS);
      return {
        emailError: emailError,
        passwordError: "Password valide",
        isSubimtted: true
      };
    default:
      return state;
  }
}
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS
} from "../signup/signupTypes";
import { fowardMessages } from "../../utils/signupMessages";

// define the initial state of the signup store
const initialState = {
  emailError: "",
  passwordError: "",
  isSubimtted: false,
  message : ""
};

// define how action will change the state of the store
export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUBMITTED:
      return {
        emailError: "",
        passwordError: "",
        isSubimtted: true,
        message : fowardMessages(state.isSubimtted, action.type)
      };
    case CREATE_USER_ERROR:
      const errorState = {
        emailError: "",
        passwordError: "",
        isSubimtted: false,
        message : fowardMessages(state.isSubimtted, action.type)
      };
      if (action.errorData.hasOwnProperty("email")) {
        errorState.emailError = action.errorData["email"];
      }
      if (action.errorData.hasOwnProperty("password")) {
        errorState.passwordError = action.errorData["password"];
      }
      return errorState;
    case CREATE_USER_SUCCESS:
      return {
        emailError: "",
        passwordError: "",
        isSubimtted: false,
        message : fowardMessages(state.isSubimtted, action.type)
      };
    default:
      return state;
  }
}
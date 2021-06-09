import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
import { toastOnError } from "../../utils/Utils";

export const loginUser = (userData, redirectTo) => {

    return (dispatch) => {
        fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: 'POST',
                body: JSON.stringify(
                    userData
                ),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => {
                const { auth_token } = response.data;
                setAxiosAuthToken(auth_token);
                dispatch(setToken(auth_token));
                dispatch(getCurrentUser(redirectTo));
            })
            .catch(error => {
                dispatch(unsetCurrentUser());
                toastOnError(error);
            });
    }
};

export const getCurrentUser = redirectTo => {
    return (dispatch) => {
        fetch(
            "http://localhost:5000/api/auth/signup",
            {
                method: 'GET',
                body: JSON.stringify(
                    userData
                ),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .get("/api/v1/users/me/")
            .then(response => {
                const user = {
                    username: response.data.username,
                    email: response.data.email
                };
                dispatch(setCurrentUser(user, redirectTo));
            })
            .catch(error => {
                dispatch(unsetCurrentUser());
                toastOnError(error);
            });
    }
};

export const setCurrentUser = (user, redirectTo) => dispatch => {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });

  console.log("set user" + redirectTo);
  if (redirectTo !== "") {
    dispatch(push(redirectTo));
  }
};

export const setToken = token => dispatch => {
  setAxiosAuthToken(token);
  localStorage.setItem("token", token);
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const unsetCurrentUser = () => dispatch => {
  setAxiosAuthToken("");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({
    type: UNSET_CURRENT_USER
  });
};

export const logoutUser = () => dispatch => {
  axios
    .post("/api/v1/token/logout/")
    .then(response => {
      dispatch(unsetCurrentUser());
      dispatch(push("/"));
      toast.success("Logout successful.");
    })
    .catch(error => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
};
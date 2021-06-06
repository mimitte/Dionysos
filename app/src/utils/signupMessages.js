import { CREATE_USER_SUBMITTED, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from "../redux/signup/signupTypes";

let message = "";

export const fowardMessages = (isSubimtted, type) => {
    switch (type) {
        case CREATE_USER_SUBMITTED:
            if (isSubimtted) {
                message = "Votre demande a été envoyée";
            } else {
                message = "Votre demande n'a pu aboutir"
            }
            break;
        case CREATE_USER_SUCCESS:
            if (isSubimtted) {
                message = "Votre compte a été créé";
            } else {
                message = "Votre compte n'a pu être créé"
            }
            break;
        case CREATE_USER_ERROR:
            if (isSubimtted) {
                message = "WTF";
            }
            break;
    }
    return message;
}
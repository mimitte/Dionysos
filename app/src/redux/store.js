/**import listBottles du reducer ==> 
 * car c'est lui qui emporte toutes les bouteilles ajoutées via notre api
 * et met à jour le store qui est au départ une liste vide d'objet state={} */ 
import { createZoneReducer } from "./reducer/createZone.reducer";
import { getCellarsOfUserReducer } from "./reducer/getCellarsOfUser.reducer";
import { bottlesCellarReducer } from "./reducer/bottlesCellar.reducer";
import { createStore,combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { signupReducer } from './reducer/signupReducer';
import { loginReducer } from './reducer/loginReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({ 
    bottlesCellarReducer:bottlesCellarReducer,
    createUser: signupReducer,
    auth: loginReducer,
    createZoneReducer,
    getCellarsOfUserReducer,

});

const store = createStore(
   rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
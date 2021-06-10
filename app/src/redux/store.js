/**import listBottles du reducer ==> 
 * car c'est lui qui emporte toutes les bouteilles ajoutées via notre api
 * et met à jour le store qui est au départ une liste vide d'objet state={} */ 
import { createCellar } from "./reducer/createCellar.reducer";
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
    createCellar
});


const store = createStore(
   rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
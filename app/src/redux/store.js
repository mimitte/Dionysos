import { bottlesCellarReducer } from "./reducer/bottlesCellar.reducer";
import { createStore,combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { signupReducer } from './reducer/signupReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({ 
    bottlesCellarReducer:bottlesCellarReducer,
    signupReducer
});

const store = createStore(
   rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
import { bottlesCellarReducer } from "./reducer/bottlesCellar.reducer";
import { createStore,combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({ 
    bottlesCellarReducer 
});

const store = createStore(
   rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
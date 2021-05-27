import { listBottles } from "./ListBottlesCellar/listBottleCellar.reducer";
import { createStore,combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// rootDecurer c'est pour combiner tous les reducers
const rootReducer = combineReducers({ 
    listBottles
})
const store = createStore(
    rootReducer,
    // pour qu'on puisse utiliser l'extension redux devtools , thunk c'est pour les promesses
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
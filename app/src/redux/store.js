/**import listBottles du reducer ==> 
 * car c'est lui qui emporte toutes les bouteilles ajoutées via notre api
 * et met à jour le store qui est au départ une liste vide d'objet state={} */ 

import { listBottles } from "./reducer/listBottleCellar.reducer";

import { createStore,combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";

// rootReducer c'est la combinaison de tous les reducers, via la méthode combineReducers

const rootReducer = combineReducers({ 

    listBottles  // le reducer qui est dans listBottleCellar.reducer.js
})
const store = createStore(
    rootReducer,
    // pour qu'on puisse utiliser exploiter nos données dans l'extension redux-devtools du navigateur 
    // thunk c'est pour les promesses
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;

/** on exporte le store car on va l'appeler dans notre App.js ==>
<Provider store={store}> 
provider englobe tous les composants qui ont besoin des données via store
 </Provider> */ 
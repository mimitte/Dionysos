import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllBottles } from "./redux/ListBottlesCellar/listBottleCellar.action";
import { ToastContainer } from "react-toastify";
import { signupNewUser } from "./redux/signup/signup.action";
import Signup from './components/Signup/Signup';


function App() {
 
  // C'est comme si on dit au store :"déclenche l'action getAllBottles()" 
  // automatiquement le store se remplit state={} ==> state={toutes les bouteilles mis à jour}
  // dès le lancement de l'appli, 
  // la liste des bouteilles sont accessibles c pour ça qu'on a mis  store.dispatch(getAllBottles());  ici
  // il va mettre à jour le state du store et tous les composants qui sont abonnés à ce store
  store.dispatch(getAllBottles());
  const login = false;
  
  if (login) {
    console.log(login);
    return (
      <Provider store={store}>
  
        <div className="App">
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <BrowserRouter>
            <BurgerMenu />
            <Routes />
          </BrowserRouter>
        </div>
      </Provider>
    );
  } else {
    console.log(login);
    return (
      <Provider store={store}>
        <Signup />
      </Provider>
    );
  }
}
export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllBottles } from "./redux/ListBottlesCellar/listBottleCellar.action";
import { ToastContainer } from "react-toastify";
import { signupNewUser } from "./redux/signup/signup.action";
import { getAllZonesToCellar } from './redux/zoneCellar/zoneCellar.action';
import Signup from './components/Signup/Signup';
<<<<<<< Updated upstream
import fakeAuth from "./Auth/fakeAuth";
store.dispatch(getAllBottles());
store.dispatch(getAllZonesToCellar());
=======
import isAuthenticated from "./utils/isAuthenticated";

if ( isAuthenticated() ) {
  store.dispatch(getAllBottles());
}
// store.dispatch(getAllZonesToCellar());

>>>>>>> Stashed changes
const login = true;
function App() {
  if (login) {
    console.log(login);
    return (
      <Provider store={store}>
        <div className="App">
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <BrowserRouter>
            <BurgerMenu  />
            <Routes  />
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
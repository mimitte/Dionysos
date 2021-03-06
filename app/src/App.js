import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllBottles } from "./redux/ListBottlesCellar/listBottleCellar.action";
import { ToastContainer } from "react-toastify";
import { getAllElements } from './redux/getAllElements/getAllElements.action';
import Signup from './components/Signup/Signup';
import isAuthenticated from "./utils/isAuthenticated";
import { getCellarsOfUser } from './redux/GetCellarsOfUser/getCellarsOfUser.action';

if ( isAuthenticated() ) {
  store.dispatch(getAllBottles());
  store.dispatch(getAllElements());
  store.dispatch(getCellarsOfUser());
}

 


const login = true;

function App() {
  if (login) {
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
    return (
      <Provider store={store}>
        <Signup />
      </Provider>
    );
  }
}
export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllBottles } from "./redux/ListBottlesCellar/listBottleCellar.action";
import { ToastContainer } from "react-toastify";
import { signupNewUser } from "./redux/signup/signup.action";

const user_data = {
  "email": "oki@blaze.petitpoulet",
  "password": "blaze"
};
store.dispatch(getAllBottles());
store.dispatch(signupNewUser(user_data));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
        <BrowserRouter>
          <BurgerMenu/>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
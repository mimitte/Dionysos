import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllBottles } from "./redux/listbottles/listBottle.action";

function App() {
  store.dispatch(getAllBottles());
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
          <BurgerMenu/>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

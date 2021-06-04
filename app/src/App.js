import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getAllBottles } from "./redux/ListBottlesCellar/listBottleCellar.action";
store.dispatch(getAllBottles());
function App() {
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

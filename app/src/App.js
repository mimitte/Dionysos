import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <BurgerMenu/>
          <Routes />
        </BrowserRouter>
    </div>
  );
}

export default App;

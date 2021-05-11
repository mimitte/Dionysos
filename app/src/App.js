import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function App() {
  return (
    <div className="App">
      <main>
      
        <BrowserRouter>
          <BurgerMenu/>
          <Routes />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

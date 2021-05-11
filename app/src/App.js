import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import MenuHamberger from './components/MenuHamberger';


function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <MenuHamberger/>
          <Routes />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import Navigation from './router/Nav';
import './App.css';
import MenuHamberger from './components/MenuHamberger';


function App() {
  return (
    <div className="App">
      {/* TODO 
          Create a header component
      */}
      <header className="App-header">
        <h1>Dionysos2</h1>
      </header>
      <main>
        <BrowserRouter>
          <MenuHamberger/>
          <Navigation />
          <Routes />
          </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

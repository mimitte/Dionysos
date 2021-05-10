import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import Navigation from './router/Nav';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Navigation />
          <Routes />
          </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

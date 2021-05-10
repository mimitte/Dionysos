import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import Navigation from './router/Nav';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      {/* TODO 
          Create a header component
      */}
      <header className="App-header">
        <h1>Dionysos</h1>
      </header>
      <main>
        <BrowserRouter>
          <Navigation />
          <SearchBar />
          <Routes />
          </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

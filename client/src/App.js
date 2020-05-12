import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginform.js';

import RecipeList from './components/recipeList.js';
//<LoginForm/>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RecipeList/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HomePage from './views/HomePage.js';

const App = () => {
  return ReactDOM.render(<HomePage />, document.getElementById('root'));
};

export default App;

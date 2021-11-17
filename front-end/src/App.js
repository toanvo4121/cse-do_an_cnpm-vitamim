import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage.js';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage.js';
import DangMim from './views/DangMim.js';
import ShowTemplate from './views/ShowTemplate.js';
import ViewOwnPage from './views/ViewOwnPage.js';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/post' element={<DangMim />} />
      <Route path='/template' element={<ShowTemplate />} />
      <Route path='/profile' element={<ViewOwnPage />} />
    </Routes>
  );
};

export default App;

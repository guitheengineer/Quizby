import React from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes';
import AppContainer from './AppContainer';

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Routes />
    </AppContainer>
  </BrowserRouter>
);

export default App;

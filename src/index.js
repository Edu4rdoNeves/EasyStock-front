// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Importando o componente App

const root = ReactDOM.createRoot(document.getElementById('root'));  // Criando o root da aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

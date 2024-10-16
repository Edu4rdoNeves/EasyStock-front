import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Menu from './components/menu/Sidebar'; // Importando o Menu correto
import UserManagement from './components/userManagement/UserManagement'; 
import ProductManagement from './components/productManagement/ProductManagement'; 
import Inventory from './components/inventory/Inventory'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} /> {/* Rota do Menu */}
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/" element={<Login />} /> {/* Rota padrão */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

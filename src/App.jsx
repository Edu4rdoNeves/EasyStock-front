import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Menu from './components/menu/Menu'; 
import Management from './components/management/Management'; 
import UserManagement from './components/userManagement/UserManagement'; 
import ProductManagement from './components/productManagement/ProductManagement'; 
import Inventory from './components/inventory/Inventory'; 
import Administration from './components/administration/Administration';
import Movement from './components/movement/Movement';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/management" element={<Management />} /> 
          <Route path="/movement" element={<Movement />} /> 
          <Route path="/administration" element={<Administration />} /> 
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

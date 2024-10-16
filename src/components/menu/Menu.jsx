import React, { useState } from 'react';
import './Menu.css'; // Certifique-se de que o caminho está correto

const Menu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para controle da sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna o estado da sidebar
  };

  return (
    <div className={`menu-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className={`sidebar-menu ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <h2>GERENCIAMENTO</h2>
        <ul>
          <li>Produtos</li>
          <li>Categorias</li>
          <li>Fornecedores</li>
        </ul>
        <h2>MOVIMENTAÇÃO</h2>
        <ul>
          <li>Entradas</li>
          <li>Saídas</li>
        </ul>
        <h2>ADMINISTRAÇÃO</h2>
        <ul>
          <li>Usuários</li>
          <li>Logs de Atividades</li>
        </ul>
      </div>
      <div className="main-content">
        <h1 style={{ color: '#1e90ff' }}>Bem-vindo ao Sistema da Geek Up Games!</h1>
        <p style={{ color: '#1e90ff' }}>Este é o menu principal</p>
        <div className="menu-buttons">
          <button className="menu-button">
            <i className="fas fa-shopping-cart"></i> GERENCIAMENTO
          </button>
          <button className="menu-button">
            <i className="fas fa-briefcase"></i> MOVIMENTAÇÃO
          </button>
          <button className="menu-button">
            <i className="fas fa-chart-bar"></i> ADMINISTRAÇÃO
          </button>
        </div>
      </div>
      <button onClick={toggleSidebar} className={`sidebar-toggle ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        {isSidebarOpen ? <i className="fas fa-arrow-left"></i> : <i className="fas fa-arrow-right"></i>}
      </button>
    </div>
  );
};

export default Menu;

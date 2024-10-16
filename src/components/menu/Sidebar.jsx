import React from 'react';
import './Sidebar.css'; // Referência ao arquivo CSS

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="sidebar-menu">
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
        <div className="welcome-message">
          <h1>Bem-vindo ao sistema da Geek Up Games!</h1>
          <p>Este é o menu principal</p>
        </div>
        <div className="button-group">
          <button className="menu-button">Cadastro de Produtos</button>
          <button className="menu-button">Cadastrar Vendas</button>
          <button className="menu-button">Controle de Estoque</button>
          <button className="menu-button">Estatísticas de Vendas</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

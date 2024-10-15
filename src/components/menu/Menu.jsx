// src/components/Menu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className='menu-container'>
            <h1>Menu Principal</h1>
            <div className='menu-buttons'>
                <button className='menu-button' onClick={() => navigate('/user-management')}>
                    Gerenciamento de Usuários
                </button>
                <button className='menu-button' onClick={() => navigate('/product-management')}>
                    Gerenciamento de Produtos
                </button>
                <button className='menu-button' onClick={() => navigate('/inventory')}>
                    Detalhes do Estoque
                </button>
            </div>
        </div>
    );
};

export default Menu;
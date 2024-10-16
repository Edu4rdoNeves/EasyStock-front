import { useNavigate } from 'react-router-dom'; // Importando useNavigate do react-router-dom
import './Management.css'; 

const Management = () => {
  const navigate = useNavigate(); // Hook para acessar o objeto de navegação

  const handleBack = () => {
    navigate(-1); // Volta para a tela anterior
  };

  return (
    <div className={`menu-page`}>
      <div className="sidebar-left"></div> {/* Barra esquerda */}
      <div className="main-content">
        <button className="back-button" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i> Voltar
        </button>
        <div className="logo-container"> {/* Container para a logo e o título */}
          <img src="/assets/task.svg" className="logo" alt="task animation" />
          <h1>Menu de Gerenciamento!</h1>
        </div>
        <div className="menu-buttons">
          <button className="menu-button">
            <i className="fas fa-shopping-cart"></i> Produtos
          </button>
          <button className="menu-button">
            <i className="fa-solid fa-list"></i> Categorias
          </button>
          <button className="menu-button">
            <i className="fa-solid fa-parachute-box"></i> Fornecedores
          </button>
        </div>
      </div>
      <div className="sidebar-right"></div> {/* Barra direita */}
    </div>
  );
};

export default Management;

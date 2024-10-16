import './Movement.css'; 

const Movement = () => {
  return (
    <div className={`menu-page`}>
      <div className="sidebar-left"></div> {/* Barra esquerda */}
      <div className="main-content">
        <div className="logo-container"> {/* Container para a logo e o título */}
        <img src="/assets/task.svg" className="logo" alt="task animation" />
        <h1 style={{ color: '#1e90ff' }}>Menu de Movimentação!</h1>
      </div>
        <br></br>
        <br></br>
        <div className="menu-buttons">
          <button className="menu-button">
            <i className="fa-solid fa-money-bill"></i> Entradas
          </button>
          <button className="menu-button">
            <i className="fa-solid fa-money-bill"></i> Saídas
          </button>
        </div>
      </div>
      <div className="sidebar-right"></div> {/* Barra direita */}
    </div>
  );
};

export default Movement;

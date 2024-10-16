import './Administration.css'; 

const Administration = () => {
  return (
    <div className={`menu-page`}>
      <div className="sidebar-left"></div> {/* Barra esquerda */}
      <div className="main-content">
        <div className="logo-container"> {/* Container para a logo e o título */}
        <img src="/assets/task.svg" className="logo" alt="task animation" />
        <h1 style={{ color: '#1e90ff' }}>Menu de Administração!</h1>
      </div>
        <br />
        <br />
        <div className="menu-buttons">
          <button className="menu-button">
            <i className="fa-solid fa-user"></i> Usuários
          </button>
          <button className="menu-button">
            <i className="fa-brands fa-rocketchat"></i> Logs de Atividades
          </button>
        </div>
      </div>
      <div className="sidebar-right"></div> {/* Barra direita */}
    </div>
  );
};

export default Administration;

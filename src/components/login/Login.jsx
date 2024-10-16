import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Novo estado para "Lembre de mim"
 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/v1/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        if (rememberMe) {
          localStorage.setItem('email', email); // Salva o email se "Lembre de mim" estiver marcado
        }
        navigate('/menu');
      } else {
        setError(data.message || 'Email ou senha estão incorretos');
      }
    } catch (error) {
      console.error('Error during login:', error); // Log do erro para depuração
      setError('Ocorreu um erro. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const hideError = () => {
    setError('');
  };

  return (
    <div className='main-login'>
      {error && (
        <div className='warning-message'>
          <span className="error-message">{error}</span>
          <span className="error-icon" onClick={hideError}>&times;</span>
        </div>
      )}
      
      <div className='left-login'>
        <h1>Faça Login <br /> E entre para o nosso time</h1>
        <img src="/assets/task.svg" className="left-login-img" alt="task animation" />
      </div>

      <div className='right-login'>
        <div className='card-login'>
          <h1>LOGIN</h1>

          <form id='login-form' onSubmit={handleSubmit}>
            <div className='text-field'>
              <label>Email:</label>
              <input 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required 
              />
              <FaUser className="icon-user" />
            </div>

            <div className="text-field">
              <label>Senha:</label>
              <input 
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required 
              />
              <FaLock className="icon-lock" />
            </div>

            <button type="submit" className="btn-login" disabled={loading}>
              {loading ? 'Carregando...' : 'Login'}
            </button>

            <div className="recall">
              <label>
                <input 
                  type='checkbox' 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} // Atualiza o estado do checkbox
                />
                Lembre de mim 
              </label>
            </div>

            <div className="forget">
              <a href='#'>Esqueceu a senha?</a>
            </div>
            
            <div className='signup-link'>
              <p>Não tem uma conta? <span onClick={() => navigate('/register')} style={{ cursor: 'pointer', transition: 0.1, textDecoration: 'underline' }}>Cadastre-se</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

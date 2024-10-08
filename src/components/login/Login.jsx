import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(''); // Limpa o erro anterior

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
        // Armazenar o token ou redirecionar, dependendo da sua lógica
        localStorage.setItem('token', data.token); // Exemplo de como salvar o token
      } else {
        setError(data.message || 'Email ou senha estão incorretos');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const hideError = () => {
    setError('');
  };

  return (
    <div className='main-login'>
      {/* Mensagem de erro exibida condicionalmente */}
      {error && (
        <div className='warning-message'>
          <span className="error-message">{error}</span>
          <span className="error-icon" onClick={hideError}>&times;</span>
        </div>
      )}
      
      <div className='left-login'>
        <h1>Faça Login <br></br> E entre para o nosso time</h1>
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
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="recall">
              <label>
                <input type='checkbox' />
                Lembre de mim 
              </label>
            </div>

            <div className="forget">
              <a href='#'>Esqueceu a senha?</a>
            </div>
            

            <div className='signup-link'>
              <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
// src/components/register/Register.jsx
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/v1/user/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Cadastro bem-sucedido:', data);
        navigate('/login');
      } else {
        setError(data.message || 'Falha ao cadastrar');
      }
    } catch (error) {
      setError('Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const hideError = () => {
    setError('');
  };

  return (
    <div className='main-register'>
      {error && (
        <div className='warning-message'>
          <span className="error-message">{error}</span>
          <span className="error-icon" onClick={hideError}>&times;</span>
        </div>
      )}

      <div className='left-register'>
        <img src="/assets/task.svg" alt="Logo" className="logo" />
        <h1>Junte-se a nós!<br />Crie sua conta agora.</h1>
      </div>

      <div className='right-register'>
        <div className='card-register'>
          <h1>CADASTRO</h1>

          <form id='register-form' onSubmit={handleSubmit}>
            <div className='text-field'>
              <label>Nome de usuário:</label>
              <input 
                type="text" 
                placeholder="Nome de usuário"
                value={name}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <FaUser className="icon-user" />
            </div>

            <div className='text-field'>
              <label>Email:</label>
              <input 
                type="email" 
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <FaEnvelope className="icon-envelope" />
            </div>

            <div className='text-field'>
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

            <button type="submit" className="btn-register" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

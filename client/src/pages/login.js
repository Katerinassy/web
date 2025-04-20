import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css'; // Импортируем CSS-файл

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '', // Исправлено на email
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Ошибка входа');
      }
  
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/dashboard');
    } catch (error) {
      alert('Ошибка: ' + error.message);
    }
  };
  
  return (
    <div className='block'>
    <div className="form-container" >
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Электронная почта:</label>
          <input
            type="email"
            id="email"
            name="email" // Исправлено на email
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Войти</button>
        <button onClick={() => navigate('/register')} type='button' className='submit-button'>Зарегистрироваться</button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
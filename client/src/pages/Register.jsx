import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import AuthForm from './AuthForm';
import Header from './header'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const nameParts = formData.name.trim().split(' ');
    const first_name = nameParts[0] || '';
    const last_name = nameParts[1] || '';
  
    try {
      const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.name,
          password: formData.password,
          email: formData.email,
          first_name,
          last_name,
          phone_number: '',
        }),
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
  
      console.log('Регистрация успешна:', data);
      navigate('/dashboard', { state: { user: data } });
    } catch (error) {
      alert('Ошибка: ' + error.message );
    }
  };
  
  

  return (
    <>
    <Header />
      <AuthForm
      title="Регистрация"
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="Зарегистрироваться"
      extraButtonText="Уже есть аккаунт? Войти"
      onExtraClick={() => navigate('/login')}
    />
    </>
  
  );
};

export default RegisterForm;

import React from 'react';
import Header from './header';
import Footer from './footer';

const Dashboard = () => {
 const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <p>Нет данных о пользователе. Пожалуйста, войдите.</p>;
  }

  return (
    <div className="dashboard">
        <Header />
        <h1>Добро пожаловать, {user?.name}!</h1>
        <p>Твоя почта: {user?.email}</p>
      <Footer />
    </div>
  );
};

export default Dashboard;

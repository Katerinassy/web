import React from 'react';
import { useCart } from './cart';
import '../style/cartochka.css';
import Header from './header';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1, // Замените на реальный userId
          products: cart,
        }),
      });
  
      const data = await response.json();
      console.log('Response data:', data);
  
      if (!response.ok) throw new Error(data.message || 'Ошибка при создании заказа');
  
      alert('Заказ создан успешно!');
      // Очистка корзины после успешного создания заказа
      cart.forEach(product => removeFromCart(product.id));
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Ошибка при создании заказа: ' + error.message);
    }
  };
  

  if (cart.length === 0) {
    return <div><Header/> Ваша корзина пуста.</div>;
  }

  return (
    <div>
      <Header/>
      <div className="cart">
        <h1 className="cart__title">Ваша корзина</h1>
        <div className="cart__items">
          {cart.map((product) => (
            <div key={product.id} className="cart__item">
              <img src={product.image} alt={product.title} className="cart__item-image" />
              <div className="cart__item-details">
                <h3 className="cart__item-title">{product.title}</h3>
                <p className="cart__item-price">{product.price}</p>
                <button className="cart__item-remove" onClick={() => removeFromCart(product.id)}>
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__total">
          <p>Общая сумма: {cart.reduce((total, product) => total + parseFloat(product.price.replace(' ₽', '')), 0)} ₽</p>
          <button className="cart__checkout" onClick={handleCheckout}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

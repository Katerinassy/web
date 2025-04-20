import React, { useState } from 'react';
import logoLove from '../img/love.svg';
import '../style/footer.css';

const Footer = () => {
  // Состояние для отображения текста
  const [isPolicyVisible, setPolicyVisible] = useState(false);

  // Функция для показа/скрытия текста
  const togglePolicy = () => {
    setPolicyVisible(!isPolicyVisible);
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logoLove} alt="Логотип LoveLife" />
        </div>
        <div className="footer__info">
          <p>ОГРНИП: 318774600222608</p>
          <p>ИНН: 503008943503</p>
        </div>
        <div className="footer__policy">
          {/* Кнопка для показа/скрытия текста */}
          <button className="footer__policy-button" onClick={togglePolicy}>
            Политика конфиденциальности
          </button>
        </div>
      </div>

      {/* Условно отображаем текст, если состояние isPolicyVisible = true */}
      {isPolicyVisible && (
        <div className="policy-text">
          <p>
            Это текст политики конфиденциальности. Здесь можно разместить
            подробности, как вы обрабатываете данные пользователей.
          </p>
          {/* Кнопка для скрытия текста */}
          <button className="close-policy" onClick={togglePolicy}>
            Закрыть
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;

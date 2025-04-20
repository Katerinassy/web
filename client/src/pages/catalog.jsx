import React, { use } from 'react';
import './../style/catalog.css';
import card1 from '../img/card1.svg';
import card2 from '../img/red.png';
import card3 from '../img/card16.svg';
import card4 from '../img/card3.svg';
import card5 from '../img/card4.svg';
import card6 from '../img/card5.svg';
import card7 from '../img/card6.svg';
import card8 from '../img/card8.svg';
import card9 from '../img/card9.svg';
import card10 from '../img/card10.svg';
import card11 from '../img/card11.svg';
import card12 from '../img/card12.svg';
import card13 from '../img/card13.svg';
import card14 from '../img/card14.svg';
import card15 from '../img/card15.svg';
import { useCart } from './cart';
const productData = [
  {
    id: 1,
    title: "Платье черное на Новый год",
    description: "Изящное новогоднее платье с завязками на плечах — идеальный выбор для праздников и свадеб в 2025 году.",
    price: "1835 ₽",
    image: card1
  },
  // Add more products as needed
  {
    id: 2,
    title: "Платье миди на запахе замшевое",
    description: "Стильное замшевое платье миди с запахом — элегантный выбор для повседневной носки и особых случаев.",
    price: "2000 ₽",
    image: card2
  },
  // additional products can be added here
  {
    id: 3,
    title: "Воздушное платье в греческом стиле",
    description: "Нежное платье в греческом стиле с драпировками — идеально для романтических образов и летних выходов.",
    price: "1600 ₽",
    image: card3
  },
  {
    id: 4,
    title: "Платье нарядное черное с белым воротником БЕЗ нижней юбки",
    description: "Элегантное черное платье с контрастным белым воротником — лаконичный и стильный вариант для деловых встреч и вечерних мероприятий.",
    price: "2100 ₽",
    image: card4
  },
  {
    id: 5,
    title: "Брюки палаццо",
    description: "Широкие брюки палаццо — комфортная и модная база для создания женственных и свободных образов.",
    price: "2600 ₽",
    image: card5
  },
  {
    id: 6,
    title: "Платье замшевое ",
    description: "Мягкое замшевое платье с облегающим силуэтом — трендовая вещь для создания стильных осенне-зимних образов.",
    price: "1000 ₽",
    image: card6
  },
  {
    id: 7,
    title: "Коричневые брюки",
    description: "Универсальные коричневые брюки классического кроя — отличное решение для повседневной носки и офисных луков.",
    price: "2600 ₽",
    image: card7
  },
  {
    id: 8,
    title: "Брюки классические палаццо",
    description: "Классические брюки палаццо свободного кроя — идеальный вариант для тех, кто ценит комфорт и элегантность.",
    price: "1990 ₽",
    image: card8
  },
  {
    id: 9,
    title: "Брюки Палаццо льняные",
    description: "Легкие льняные брюки палаццо — удобный и дышащий вариант для жарких летних дней.",
    price: "1200 ₽",
    image: card9
  },
  {
    id: 10,
    title: "Спортивный комбинезон для фитнеса",
    description: "Удобный спортивный комбинезон для тренировок — функциональная и стильная одежда для активного образа жизни.",
    price: "2700 ₽",
    image: card10
  },
  {
    id: 11,
    title: "Платье лапша миди весеннее",
    description: "Модное платье-лапша миди — яркий акцент в весеннем гардеробе для повседневных и праздничных образов.",
    price: "1900 ₽",
    image: card11
  },
  {
    id: 12,
    title: "Молочная футболка большие размеры",
    description: "Нежная молочная футболка oversize — базовая вещь для комфортных и стильных повседневных луков.",
    price: "1440 ₽",
    image: card12
  },
  {
    id: 13,
    title: "Платье на запахе больших размеров",
    description: "Платье на запахе свободного кроя — удобный и женственный вариант для обладательниц пышных форм",
    price: "1390 ₽",
    image: card13
  },
  {
    id: 14,
    title: "Легкое платье в греческом стиле",
    description: "Воздушное платье в греческом стиле из струящейся ткани — идеальный выбор для летнего гардероба.",
    price: "1840 ₽",
    image: card14
  },
  {
    id: 15,
    title: "Рубашка женская",
    description: "Классическая женская рубашка — универсальный предмет гардероба для деловых и повседневных образов",
    price: "1800 ₽",
    image: card15
  },
];

const Catalog1 = () => {
  const {addToCart} = useCart()
  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог</h1>
      <div className="catalog__grid">
        {productData.map(product => (
          <div key={product.id} className="product-card2">
            <div className="product-card__image-wrapper">
              <img src={product.image} alt={product.title} className="product-card__image" />
            </div>
            <div className="product-card__content">
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__description">{product.description}</p>
              <div className="product-card__footer">
                <span className="product-card__price">{product.price}</span>
                <a onClick={() => addToCart(product) } className="product-card__button">Заказать</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog1;
import './App.css';
import Header from './pages/header';
import Catalog from './pages/catalog';
import Natalia from './img/Natalia.svg';
import Question from './pages/questions';
import Footer from './pages/footer';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();  // Вызовите useNavigate в теле компонента

  return (
    <>
      <div className="App">
        {/* Логотип */}
        <Header />
        {/* Контент главной страницы */}
        <main className="content">
          <div className="content__block">
            <div className="content__image-container">
              <img
                src={Natalia}
                alt="Описание"
                className="content__image"
              />
            </div>
            <div className="content__text-container">
              <p className="content__text">
                “ANM LoveLife: Ваш идеальный гардероб для каждой жизни. Откройте для себя уникальные коллекции, которые подчеркнут вашу индивидуальность и помогут выразить себя через стиль. Мы предлагаем одежду для любых случаев — от повседневной до вечерней, чтобы вы всегда чувствовали себя уверенно и комфортно!”
              </p>
            </div>
          </div>
        </main>
        <Catalog />
        <button
          className="catalog__button"
          onClick={() => navigate("/catalog")}  // Используйте navigate здесь
        >
          Перейти
        </button>
        <Question />
        <Footer />
      </div>
    </>
  );
}

export default App;

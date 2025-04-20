import { Routes, Route } from 'react-router-dom';
import App from './App';
import Catalog from './App2';
import LoginUser from './App3';
import RegisterForm from './pages/Register';
import Dashboard from './pages/Dashboard';
import Cart from './pages/cartchka';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/login" element={<LoginUser/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routers;

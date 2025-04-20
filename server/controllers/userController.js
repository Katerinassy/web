const { User } = require('../models/models');

const register = async (req, res) => {
    let { username, password, email, first_name, last_name, phone_number } = req.body;
  
    if (!password || !email) {
      return res.status(400).json({ message: 'Пароль и email обязательны' });
    }
  
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: 'Такой пользователь уже существует' });
      }
  
      // Собираем объект только с теми полями, что есть
      const newUserData = {
        username: username || '',
        password,
        email,
        first_name: first_name || '',
        last_name: last_name || '',
      };
  
      if (phone_number && phone_number.trim() !== '') {
        newUserData.phone_number = phone_number.trim();
      }
  
      const newUser = await User.create(newUserData);
  
      console.log('Новый пользователь создан:', newUser?.toJSON?.() || newUser);
  
      return res.status(201).json({
        id: newUser.id,
        name: `${newUser.first_name} ${newUser.last_name}`.trim(),
        email: newUser.email,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
  };
const login = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email и пароль обязательны' });
    }
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Неверный email или пароль' });
      }
  
      return res.status(200).json({
        id: user.id,
        name: `${user.first_name} ${user.last_name}`.trim(),
        email: user.email,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
  };
  

module.exports = {
  register,
  login,
};

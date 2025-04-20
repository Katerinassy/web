const Router = require('express');
const router = new Router();

const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes'); // Импортируйте маршруты заказов

router.use('/users', userRoutes);
router.use('/orders', orderRoutes); // Добавьте маршруты заказов

module.exports = router;

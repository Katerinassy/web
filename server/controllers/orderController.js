const { Order, OrderProduct, Basket, BasketProduct, Product } = require('../models/models');

class OrderController {
  async createOrder(req, res) {
    try {
      const { userId, products } = req.body;
      console.log('Received order data:', { userId, products });

      // Проверяем, существуют ли все product_id в базе данных
      const productIds = products.map(product => product.id);
      const existingProducts = await Product.findAll({ where: { id: productIds } });
      const existingProductIds = existingProducts.map(product => product.id);

      // Фильтруем продукты, которые существуют в базе данных
      const validProducts = products.filter(product => existingProductIds.includes(product.id));

      // Создаем новый заказ
      const order = await Order.create({
        user_id: userId,
        total_amount: validProducts.reduce((total, product) => total + parseFloat(product.price.replace(' ₽', '')), 0),
      });
      console.log('Order created:', order);

      // Добавляем продукты в заказ
      const orderProducts = validProducts.map(product => ({
        order_id: order.id,
        product_id: product.id,
      }));
      console.log('Order products:', orderProducts);

      await OrderProduct.bulkCreate(orderProducts);
      console.log('Order products added to order');

      // Очищаем корзину пользователя
      await BasketProduct.destroy({ where: { basket_id: userId } });
      console.log('Basket cleared');

      return res.status(201).json({ message: 'Заказ создан успешно!' });
    } catch (error) {
      console.error('Error creating order:', error);
      return res.status(500).json({ message: 'Ошибка при создании заказа', error: error.message });
    }
  }
}

module.exports = new OrderController();

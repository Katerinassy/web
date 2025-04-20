const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize here
// Определение модели User
const User = sequelize.define('User', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    username: { 
        type: DataTypes.STRING, 
        allowNull: false, // Поле обязательно для заполнения
        unique: true     // Уникальное поле
    },
    password: { 
        type: DataTypes.STRING, 
        allowNull: false // Поле обязательно для заполнения
    },
    email: { 
        type: DataTypes.STRING, 
        allowNull: false, // Поле обязательно для заполнения
        unique: true     // Уникальное поле
    },
    first_name: { 
        type: DataTypes.STRING, 
        allowNull: false // Поле обязательно для заполнения
    },
    last_name: { 
        type: DataTypes.STRING, 
        allowNull: false // Поле обязательно для заполнения
    },
    phone_number: { 
        type: DataTypes.STRING, 
        unique: true // Поле обязательно уникальное
    },
    role: { 
        type: DataTypes.BIGINT, 
        allowNull: false, // Поле обязательно для заполнения
        defaultValue: 0  // Значение по умолчанию
    },
});

// Определение модели Product
const Product = sequelize.define('Product', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    product_name: { 
        type: DataTypes.STRING, 
        allowNull: false // Поле обязательно для заполнения
    },
    description: { 
        type: DataTypes.TEXT 
    },
    price: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false // Поле обязательно для заполнения
    },
    img: { 
        type: DataTypes.STRING 
    },
});

// Определение модели Basket
const Basket = sequelize.define('Basket', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    user_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, // Поле обязательно для заполнения
        references: { model: User, key: 'id' } 
    },
});

// Определение модели BasketProduct
const BasketProduct = sequelize.define('BasketProduct', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    basket_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, // Поле обязательно для заполнения
        references: { model: Basket, key: 'id' } 
    },
    product_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, // Поле обязательно для заполнения
        references: { model: Product, key: 'id' } 
    },
});

// Определение модели Order
const Order = sequelize.define('Order', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    user_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, // Поле обязательно для заполнения
        references: { model: User, key: 'id' } 
    },
    order_date: { 
        type: DataTypes.DATE, 
        defaultValue: Sequelize.NOW // Значение по умолчанию — текущая дата
    },
    total_amount: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false // Поле обязательно для заполнения
    },
});

// Определение модели OrderProduct
const OrderProduct = sequelize.define('OrderProduct', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    order_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, // Поле обязательно для заполнения
        references: { model: Order, key: 'id' } 
    },
    product_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, // Поле обязательно для заполнения
        references: { model: Product, key: 'id' } 
    },
});

// Установка связей
User.hasOne(Basket, { foreignKey: 'user_id' });
Basket.belongsTo(User, { foreignKey: 'user_id' });

Basket.hasMany(BasketProduct, { foreignKey: 'basket_id' });
BasketProduct.belongsTo(Basket, { foreignKey: 'basket_id' });
BasketProduct.belongsTo(Product, { foreignKey: 'product_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Order.hasMany(OrderProduct, { foreignKey: 'order_id' });
OrderProduct.belongsTo(Order, { foreignKey: 'order_id' });
OrderProduct.belongsTo(Product, { foreignKey: 'product_id' });



module.exports = { User, Product, Basket, BasketProduct, Order, OrderProduct };

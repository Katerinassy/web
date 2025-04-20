const Router = require('express');
const router = new Router();

const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct); // Только админ
router.put('/:id', productController.updateProduct); // Только админ
router.delete('/:id', productController.deleteProduct); // Только админ

module.exports = router;

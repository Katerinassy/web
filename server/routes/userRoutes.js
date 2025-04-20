const Router = require('express');
const router = new Router();

const userController = require('../controllers/userController');
console.log('userRoutes загружен');


router.post('/register', userController.register);
router.post('/login', userController.login);


router.get('/auth', (req, res) => {
    res.json({ message: "ALL WORKING!" });
});

module.exports = router;

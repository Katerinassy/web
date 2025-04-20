const Router = require('express');
const router = new Router();


router.get('/:userId', (req, res)=>{
    res.json({message: '123'})
});
// router.post('/add', basketController.addToBasket);
// router.delete('/remove', basketController.removeFromBasket);

module.exports = router;

const {Router} = require('express');

const {AuthController} = require('../controllers');

const router = Router();
const authController = new AuthController();

router.post('/register', authController.register);

router.post('/login', authController.login)

module.exports = router;
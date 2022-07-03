const {Router} = require('express');
const {NoteController} = require('../controllers');
const {verifyToken} = require('../middlewares');

const router = Router();
const noteController = new NoteController();

router.post('/', verifyToken, noteController.create);

router.get('/', verifyToken, noteController.getAll);

module.exports = router;
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');




router.get('/', function(req, res, next) {
    res.render('respond with a resource');
})
router.get('/register',guestMiddleware, usersController.register);



module.exports = router;
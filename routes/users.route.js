const express = require('express');
const router = express.Router(); 
const usersControllers = require('../controllers/usersControllers')

router.get('/', usersControllers.getUsers);
router.post('/users', usersControllers.saveUsers);

module.exports = router;
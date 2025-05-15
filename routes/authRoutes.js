const express = require('express');
const router = express.Router();
const { login, cadastrar } = require('../controllers/authController');

router.post('/login', login);
router.post('/cadastrar', cadastrar);

module.exports = router;

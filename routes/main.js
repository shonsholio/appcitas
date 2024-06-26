const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.main)
router.post('/send-email', mainController.send)
router.get('/confirm', mainController.got)

module.exports = router 
// Route module
const express = require('express');
const router = express.Router();

const main_controller = require('../controllers/main.controller.js');

//GET home page
router.get('/', main_controller.homePage);

router.get('/import', main_controller.importPage);

router.get('/account', main_controller.accountPage);

module.exports = router;
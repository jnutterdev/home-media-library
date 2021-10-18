// Route module
const express = require('express');
const router = express.Router();

const account = require('./api.account.controller.js');

//GET home page
router.post('/api/v1', account.createUser);

router.get('/api/v1', account.allUsers);

router.get('/api/v1', account.getUser);

router.delete('/api/v1', account.deleteUser);

module.exports = router;
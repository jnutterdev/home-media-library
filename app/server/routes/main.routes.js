module.exports = app => {
    const main_controller = require("../controllers/main.controller.js");
    var router = require("express").Router();

    //GET home page
    router.get('/', main_controller.homePage);

    router.get('/import', main_controller.importPage);

    router.get('/account', main_controller.accountPage);

    app.use('/', router);

}
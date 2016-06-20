// Definisco il router
var express = require("express");
var router = express.Router();
var controller = require("./users.controller")();


router.get('/', controller.query);

module.exports = ({
    name: 'User router',
    version:'0.1.0',
    router: router,
});
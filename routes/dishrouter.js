const express= require('express');
const bodyparser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyparser.json());
dishRouter.route('/')
.all(function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text');
    next();
    //this will continue to search for additional edit on /dishes
    //the same res and req objects will be passed to any other get put or post request
}).get(function (req, res, next) {
    res.end("We will be sending you all the dishes");
}).post(function (req, res, next) {
    res.end('wll add the dish' + req.body.name + ' with description ' + req.body.description);
    //this will be done by using the body parser

}).delete(function (req, res, next) {
    res.end('Deleting all dishes');
}).put(function (req, res, next) {

    res.statusCode = 403;
    res.end('This operation is not allowed');
});
module.exports=dishRouter();
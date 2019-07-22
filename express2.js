const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
//used for post req puts the json data in req body
const dishRouter = require('./routes/dishrouter');
const app = express();
const morgan = require('morgan');
const hostname = 'local host';
const port = 3000;
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/dishes', dishRouter);
app.use(function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end("This is an express enabled server");
});
app.listen(port);
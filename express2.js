const express=require('express');
const http = require('http');
const bodyparser = require('body-parser');
//used for post req puts the json data in req body
const dishRouter = require('./routes/dishrouter');
const app = express();
const morgan = require('morgan');
const hostname='local host';
const port = 3000;
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/dishes',dishRouter);
app.get('/dishes/:dishid', function (req, res, next) {
    res.end("We will be sending details of the dish "+req.params.dishid+' to you');
});
app.post('/dishes/:dishid', function (req, res, next) {
    res.statusCode = 403;
    res.end('put ooperation not supported on dishes '+req.params.dishid);

});
app.put('/dishes/:dishid',function(req,res,next)
{
    res.write('Updating the dish '+req.params.dishid);

    res.end('Will update the dish '+req.body['name']+' with details '+req.body['description']);
});
app.delete('/dishes/:dishid',function(req,res,next)
{
    res.end('Deleting the dish'+req.params.dishid);
});
app.use(function(req,res,next)
{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end("This is an express enabled server");
});
app.listen(port);
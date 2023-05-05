var express = require('express');


var app = express();

var logger = require('morgan');

var cookieparser = require('cookie-parser');


app.use(logger('dev'));
app.use(cookieparser());

app.use((req,res,next)=>{
    res.cookie('username', 'Rahul')
    next();

})

app.get('/about',(req,res)=>{
    res.send('send the cookies to the client');

})

app.listen(3000,()=>{
    console.log('app listen on port 3k');
})
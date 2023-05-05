var express = require('express');

var app = express();

var cookieparser= require('cookie-parser');

var bodyparser = require('body-parser');

app.use('/admin',(req,res,next)=>{
next('Unautharizer user');
})

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('Welcome to the home page');
})
app.get('/about',(req,res)=>{
    res.send('Welcome to the about page');
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(4000,()=>{
    console.log('app listen on port 4k');
})
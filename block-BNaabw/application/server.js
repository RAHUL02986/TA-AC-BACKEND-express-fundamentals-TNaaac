var express = require('express');

var app = express();

var cookieparser = require('cookie-parser');

var logger = require('morgan');

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname));

app.use(logger('dev'));

app.use(cookieparser());

app.use((req,res,next)=>{
    res.cookie('server', 'connected to localhost:4000');
    next();
})

app.get('/',(req,res)=>{
    res.send(`<h1>Rahul kapoor</h1>`);
})

app.get('/users',(req,res)=>{
    res.send(`router handling on /users`);

})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/project',(req,res)=>{
    res.sendFile(__dirname + '/project.html')
})

app.use((req,res,next)=>{
    res.send('Page not found');
})

app.use((err,req,res,next)=>{
    res.send(err);
})


app.listen(4000,()=>{
    console.log('app listenning on port 4k');
})
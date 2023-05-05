var express = require('express');

var app = express();

var bodyparser = require('body-parser');

var logger = require('morgan');

app.use((req,res, next)=>{
    next()
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html')
})

app.post('/new',(req,res)=>{
    res.json(req.body);
})

app.get('/users/:username', (req,res)=>{
    let username = req.params.username;
    res.send(username);
})

app.listen(3000,()=>{
    console.log(`app is running on port 3k`)
})

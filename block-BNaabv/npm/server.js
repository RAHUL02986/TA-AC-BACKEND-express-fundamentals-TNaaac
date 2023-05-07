var express = require('express');
var app = express();

var logger = require('morgan');

var cookieparser= require('cookie-parser');

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(logger("dev"));

app.use(cookieparser());

app.use((req,res,next)=>{
    res.cookie("server", "connect to localhost server is running locally");
next()
})

app.get('/',(req,res)=>{
    res.setHeader('content-type', 'text/html');
    res.send(`<h2>Welcome to express</h2>`)

})

app.get('/about', (req,res)=>{
    res.setHeader('content-type', 'text/plain');
    res.send('My name is querty');
})
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+ '/form.html')
})
app.post('/json',(req,res)=>{
    res.json(req.body);
})
app.use('/user/:username',(req,res)=>{
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`);
})

app.use((req,res,next)=>{
    res.send('Page Not Found');
})
app.use((err,res,req,next)=>{
    res.send(err);
})


app.listen(3000,()=>{
    console.log('app listen on port 3k');
})
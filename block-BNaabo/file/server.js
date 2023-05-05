var express = require('express');

var app = express();

app.use((req,res,next)=>{
    console.log(req.url , req.method);
    next();

})

app.use(express.static(__dirname));

app.use(express.json());

app.use(express.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');

    next()
})



app.post('/json',(req,res)=>{
    console.log(req.body);
    next()

})

app.post('/contact',(req,res)=>{
    console.log(req.body);
    next()
})

app.listen(3000,()=>{
    console.log('app listenning on port 3k');
})
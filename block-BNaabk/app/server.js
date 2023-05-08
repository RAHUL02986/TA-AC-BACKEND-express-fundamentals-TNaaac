var express = require('express');

var app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to express');
});

app.listen(3000, () => {
  console.log('port listen on 3k');
});

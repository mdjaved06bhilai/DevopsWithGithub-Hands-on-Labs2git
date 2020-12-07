var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Welcome to Github Hands on Labs !');
});
app.listen(process.env.PORT, function () {
  console.log('test Example app listening on process.env.PORT');
});

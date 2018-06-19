var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!!\n' + req.query.id);
  if !(req.query.id) {throw new Error ('An error occured');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);

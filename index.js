var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  if (!req.query.id) {
  res.send('Hello World!!\n');
} else 
{ res.end(500); }
} );

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);

var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
	  res.send('!!! How are you today !!!');
});
 
app.listen(5000);
 
module.exports = app;

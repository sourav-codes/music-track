require('./api/data/db.js');
var express = require('express');
var app = require('express')();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes/routes')

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});


app.use(express.static('public'));

//parsing for posted forms
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/v1', routes);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});




// Port 
app.listen(5000, function () {
  console.log('listening on :5000');
});
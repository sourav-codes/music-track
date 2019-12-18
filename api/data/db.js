var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/musictrack';

mongoose.connect(dburl);


//connection events
mongoose.connection.on('connected',function(){
    console.log('Mongoose connected to' + dburl);
});
mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected ');
});
mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error:' + err);
});


// bringing in Schema and models

require('./tracks.model.js');
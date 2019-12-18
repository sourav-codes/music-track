var mongoose = require('mongoose');

var TrackSchema = new mongoose.Schema({
  title : {
      type : String,
      required : true
  },
  genre :  String,
  rating : {
      type : Number,
      min : 0,
      max : 5,
      "default" : 0
  },
});

mongoose.model('Track', TrackSchema,'tracks');
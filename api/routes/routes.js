var express = require('express');
var router = express.Router();

var ctrlMusic = require('../controllers/music-controller.js');


//Track Routes
router
   .route('/music') 
   .get(ctrlMusic.musicGetAll)
   .post(ctrlMusic.musicAddOne);;

router
   .route('/music/:resultsId')
   .get(ctrlMusic.musicGetOne)
   .put(ctrlMusic.musicUpdateOne);



module.exports = router; 
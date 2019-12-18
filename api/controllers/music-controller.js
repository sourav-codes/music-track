var mongoose = require('mongoose');
var Track = mongoose.model('Track');

// Get All Track List

module.exports.musicGetAll = function(req, res){

    Track
        .find()
        .exec(function(err, tracks){
          if(err) {
            console.log("Error finding tracks");
            res
               .status(500)
               .json(err);
          }else{
            console.log("found some tracks",tracks.length);
            res
                .json(tracks);
        }
        });
}; 

// Get One Track List

module.exports.musicGetOne = function(req, res){
    var resultsId = req.params.resultsId;
    console.log("Get  genreid", resultsId);

    Track
      .findById(resultsId)
      .exec(function(err, doc){
      if(err){
        console.log("Error finding Track");
        response.status=500;
        response.message=err;
      }else if(!doc){
        res
           response.status=404;
           response.message={
            "message" : "Track ID not found"
        };
      } 
      res
         .status(response.status)
         .json(response.message);
      });  
}; 


//Update music track

module.exports.musicUpdateOne = function(req, res){
  var resultsId = req.params.trackId;
console.log("GET the Track Id :",resultsId);

 Track
     .findById(resultsId)
     .select(" ")
     .exec(function(err,doc){
     var response = {
         status : 200,
         message : doc
     }
     
 
     if(err) {
             console.log("Error finding Track");
             response.status=500;
             response.message=err;
     }else if(!doc){
         res
             response.status=404;
             response.message={
                 "message" : "Track ID not found"
             };
     } 
     if(response.status !== 200){
     res
         .status(response.status)
         .json(response.message);
     } else{ 
         doc.title = req.body.title;
         doc.rating = parseInt(req.body.rating);
         doc.genres = req.body.genres;
         
         doc.save(function(err, trackUpdated){
             if(err){
                 res
                     .status(500)
                     .json(err);
                 
             }else{
                 res
                     .status(204)
                     .json();
                 
             }
         });
     }
 });
};

// Add a new music track

module.exports.musicAddOne = function(req, res){

  Track
    .create({
       title : req.body.title,
       rating : parseInt(req.body.rating),
       genres : req.body.genres || null
  }, function(err, track){   
      if(err){
          console.log("Error creating Track");
          res
              .status(400)
              .json(err);
      } else {
          console.log("Track created", track)
          res
              .status(201)
              .json(track);
      }
  });
};
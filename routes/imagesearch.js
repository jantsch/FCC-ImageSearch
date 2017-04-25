var express = require('express');
var router = express.Router();
var History = require('../models/historyEntry');
var imageSearch = require('node-google-image-search');
 

 

router.get('/:toBeSearched' , function(req, res) {
        
        var toBeSearched = req.params.toBeSearched;
        var offset = req.query.offset;
     
        var results = imageSearch(toBeSearched, display, 0, offset);
       

        function display(results) {

           var resultToBeDisplayed = results.map(function(obj) { 
             return {
                      url: obj.link,
                      snippet: obj.snippet,
                      thumbnail: obj.image.thumbnailLink, 
                      context: obj.image.contextLink
                    };
          });

           res.send(resultToBeDisplayed);
           // Saving
           var His =  new History({
              term: toBeSearched,
              when: new Date()
            });

           His.save(function (err) {
          if (err) return handleError(err);
          else 
            console.log("Saved");
          });

        }
       
    });


module.exports = router;
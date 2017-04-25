var express = require('express');
var router = express.Router();
var History = require('../models/historyEntry');

/* GET users listing. */
router.get('/', function(req, res, next) {
  History
  		.find().select('term when -_id').sort('-when').exec(function(err,data){
  			if(err)
  				console.log(err);
  			else
  				res.send(data);

  		});
});

module.exports = router;

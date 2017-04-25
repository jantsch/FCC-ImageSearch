var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("URL available: /latest , /imagesearch");
});

var latest = require('./latest');
var imagesearch = require('./imagesearch');
router.use('/latest/', latest);
router.use('/imagesearch/', imagesearch);



module.exports = router;

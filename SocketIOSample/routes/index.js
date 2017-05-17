var express = require('express');
var router = express.Router();
var songController = require('../controller/songController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/song', songController.postSong);
module.exports = router;

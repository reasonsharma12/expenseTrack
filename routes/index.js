var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/wLit', function(req, res, next) {
  res.render('index', { title: 'wLit' });
});
router.get('/number', function(req, res, next) {
  res.render('index', { title: 'wLit',number:10 });
});


module.exports = router;

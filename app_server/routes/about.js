const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('about', { title: 'About My Shop of Horrors' });
});

module.exports = router;

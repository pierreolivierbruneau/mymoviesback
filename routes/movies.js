
var express = require('express');
var router = express.Router();


router.get('/movies', (req, res) => {
    fetch ('https://api.themoviedb.org/3/discover/movie?api_key=f604f1de8e2cb75663d4f7bcccb3c4bd')
    .then(response => response.json())
    .then(data => {
      res.json({data});
    });
 });


 module.exports = router;
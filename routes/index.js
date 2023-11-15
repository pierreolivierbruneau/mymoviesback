var express = require('express');
var router = express.Router();


router.post('/movies', (req, res) => {
    fetch ('https://api.themoviedb.org/3/discover/movie?api_key={YOUR_API_KEY}')
    .then(response => response.json())
    .then(data => {
      res.json({ bitcoinInfos: data });
    });
 });



module.exports = router;

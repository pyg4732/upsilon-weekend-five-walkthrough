var router = require('express').Router();
var pg = require('pg');

var pool = new pg.Pool({
  database: 'gifs'
});

router.get('/', function(req, res) {
  //ask the database for all the favorites,
  //send them to the client
  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to DB', err);
        res.status(500).send(err);
      } else {
        client.query('SELECT * FROM favorites;', function(err, results) {
        if (err) {
          console.log('Erroe getting favorites', err);
          res.status(500).send(err);
        } else {
          res.send(result.rows);
        }
      });
    }
  } finally {
    done();
  }
});
}); //end router.get

router.post('/', function(req, res) {
  //get the information from the request body,
  //putit in the database
  //respond to client
  pool.connect(function(err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to DB', err);
        res.status(500).send(err);
      } else {
        client.query(
          'INSERT INTO favorites (url, comment) VALUES ($1, $2) RETURNING *;',
          [req.body.url, req.body.comment],
          function(err, results) {
        if (err) {
          console.log('Erroe getting favorites', err);
          res.status(500).send(err);
        } else {
          res.send(result.rows);
        }
      });
    }
  } finally {
    done();
  }
});
});



module.exports = router;

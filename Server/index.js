const path = require('path');
const express = require('../node_modules/express');
const db = require('../database/index.js');

const app = express();
const port = 3777;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public/')));

app.get('/allStories', (req, res) => {
  db.connection.query('SELECT latitude, longitude FROM stories', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/locationInfo', (req, res) => {
  const queryArgs = [req.query.lat, req.query.lng];
  const queryStatement = 'SELECT * FROM stories WHERE (latitude = ? AND longitude = ?)';
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/storySubmit', (req, res) => {
  const queryArgs = [
    req.body.lat,
    req.body.lng,
    req.body.name,
    req.body.loc,
    req.body.saw,
    req.body.heard,
    req.body.story,
  ];
  const queryStatement = 'INSERT INTO stories (latitude, longitude, storyname, storylocation, thingsseen, thingsheard, story) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.connection.query(queryStatement, queryArgs, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(200);
    }
  });
});

app.listen(port);
console.log(`time to get weird on port ${port}`);

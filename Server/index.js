const path = require('path');
const fs = require('fs');
const express = require('../node_modules/express');
const db = require('../database/index.js');

const app = express();
const port = 3777;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public/')));

app.get('/errorLog', (req, res) => {
  const time = new Date().toUTCString;
  const data = [time, req.funcname, req.err];
  fs.writeFile('./ErrorLog/ErrorLog.txt', data);
  res.sendStatus(200);
});

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

app.get('/substoryNameGet', (req, res) => {
  const queryArgs = [req.body.storyid];
  const queryStatement = 'SELECT subName FROM substories WHERE storyid = ?';
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/substoryGet', (req, res) => {
  const queryArgs = [req.query.storyId];
  const queryStatement = 'SELECT id, subname, sublikes from substories WHERE storyid = ?';
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/substoryGetSpec', (req, res) => {
  const queryArgs = [req.query.id];
  const queryStatement = 'SELECT * from substories WHERE id = ?';
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/userdata', (req, res) => {
  const queryArgs = [req.query.user];
  const queryStatement = '';
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
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
  const queryStatement = 'INSERT INTO stories (latitude, longitude, storyname, storylocation, thingsseen, thingsheard, story, likes) VALUES (?, ?, ?, ?, ?, ?, ?, 0)';
  db.connection.query(queryStatement, queryArgs, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.post('/subStorySubmit', (req, res) => {
  const queryArgs = [
    req.body.id,
    req.body.name,
    req.body.location,
    req.body.saw,
    req.body.heard,
    req.body.story,
  ];
  const queryStatement = 'INSERT INTO substories (storyid, subname, sublocation, subseen, subheard, substory, sublikes) VALUES(?, ?, ?, ?, ?, ?, 0)';
  db.connection.query(queryStatement, queryArgs, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/subLike', (req, res) => {
  const queryArgs = [req.body.id];
  const queryStatement = 'UPDATE substories SET sublikes = sublikes + 1 WHERE id = ?';
  db.connection.query(queryStatement, queryArgs, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/subDislike', (req, res) => {
  const queryArgs = [req.body.id];
  const queryStatement = 'UPDATE substories SET sublikes = sublikes - 1 WHERE id = ?';
  db.connection.query(queryStatement, queryArgs, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port);
console.log(`time to get weird on port ${port}`);

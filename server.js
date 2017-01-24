'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
//***************************************************

app.post('/game/insert', function(request, response) {

  let client = new pg.Client(conString)

  client.connect(function(err) {
    if (err) console.error(err);

    client.query2(
      'CREAT TABLE IF NOT EXISTS games(' +
        'game_table_id INTEGER PRIMARY KEY, ' +
        'name VARCHAR(255) NOT NULL, ' +
        'gameId INTEGER NOT NULL, ' +
        'rank INTEGER, ' +
        'thumbnail VARCHAR(255));',
      function(err) {
        if (err) console.error(err);
        client.end();
      }
      query2();
    );

    client.query2(
      `INSERT INTO games(name, gameId, rank, thumbnail)
      VALUES ($1, $2, $3, $4);`,
      [request.body.name, request.body.gameId, request.body.rank, request.body.thumbnail],
      function(err) {
        if (err) console.error(err);
        client.end();
      }
    );
  })
  response.send('insert complete');
});

//***************************************************
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

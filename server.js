'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = process.env.DATABASE_URL || 'postgres://postgres:bobistheshit@localhost:5432/bwork';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
//***************************************************

app.post('/game/insert', (request, response) => {

  let client = new pg.Client(conString);

  client.connect(function(err) {
    if (err) console.error(err);

    client.query(
      `CREATE TABLE IF NOT EXISTS games(
      name VARCHAR(255) NOT NULL,
      description VARCHAR,
      game_id INTEGER PRIMARY KEY NOT NULL,
      rank INTEGER,
      thumbnail VARCHAR(255),
      image VARCHAR,
      minPlayers INTEGER,
      maxPlayers INTEGER,
      playingTime INTEGER);`,
      function(err) {
        if (err) console.error(err);
        queryTwo();
      }
    );

    function queryTwo(){
      client.query(
      `INSERT INTO games(name, description, game_id, rank, thumbnail, image, minPlayers, maxPlayers, playingTime)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
      [
        request.body.name,
        request.body.description,
        request.body.game_id,
        request.body.rank,
        request.body.thumbnail,
        request.body.image,
        request.body.minPlayers,
        request.body.maxPlayers,
        request.body.playingTime
      ],
      function(err) {

        if (err) console.error(err);
        client.end();
      });
    }
  })
  response.send('insert complete');
});
app.get('/bgg/*', proxyBgg);

function proxyBgg(request,response){
  console.log('bgg request', request.params[0]);
  (requestProxy({
    url: `https://bgg-json.azurewebsites.net/${request.params[0]}`,
  }))(request, response);
}

app.get('/game/all', function(request, response) {

  let client = new pg.Client(conString)

  client.connect(function(err) {
    if (err) console.error(err);

    client.query(
      'SELECT * FROM games',
      function(err, result) {
        if (err) console.error(err);
        response.send(result);
        client.end();
      }
    );
  })
});

app.get('*', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});

//***************************************************
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

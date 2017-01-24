'use strict';

//vars from Jay Game Cosntructor and Game.all
(function(module){

  function Game(opts){
    Object.keys(opts).forEach(e => this[e] = opts[e]);
  }

  Game.allGames =[];
  Game.allGamesDetailed = [];
//vars from Jay Game Cosntructor and Game.all

  Game.prototype.insertRecord = function(callback) { //eslint-disable-line
    $.post('/game/insert', {
      name: this.name,
      description: this.description,
      game_id: this.gameId,
      rank: this.rank,
      thumbnail: this.thumbnail,
      image: this.image,
      minPlayers: this.minPlayers,
      maxPlayers: this.maxPlayers,
      playingTime: this.playingTime
    })
    .then(data => {
      console.log(data);
      if(callback) callback();
    });
  }

  Game.loadAll = data => {
    data.forEach(element => {
      Game.allGames.push(element);
    });
  };

  Game.fetchAll = (callback) => { //eslint-disable-line
    $.get('/game/all') // Done path not yet defined.
    .then(
      function(results){
        if(!results.rows) {
          console.log(results.rows, 'games exist in postgres db');
          Game.loadAll(results.rows); //eslint-disable-line
          callback();
        } else {
          $.get('/bgg/hot')
          .then(data => {
            console.log(data, 'data var from bgg');
            data.forEach(function(item) {
              console.log(item.gameId, 'gameId');
              $.get(`/bgg/thing/${item.gameId}`)
              .then(newdata => {
                console.log(newdata, 'new data');
                let game = new Game(newdata); //eslint-disable-line
                game.insertRecord();
              })
            })
          })
        }
      }
    )
  };

  module.Game = Game;
})(window)

'use strict';

(function(module){

  function Game(opts){
    Object.keys(opts).forEach(e => this[e] = opts[e]);
  }

  Game.allGames = [];

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
    .then(data => { //eslint-disable-line
      if(callback) callback();
    });
  }
  Game.prototype.toHtml = function() {
    let template = Handlebars.compile($('#game-info-template').html()); //eslint-disable-line

    return template(this);
  }

  Game.loadAll = data => {
    Game.allGames = data.map(ele => new Game(ele));
  };

  Game.fetchAll = (callback, param) => { //eslint-disable-line
    $.get('/game/all')
    .then(
      function(results){
        if(results.rows) {
          Game.loadAll(results.rows); //eslint-disable-line
          callback(param);
        } else {
          $.get('/bgg/hot')
          .then(data => {
            data.forEach(function(item) {
              $.get(`/bgg/thing/${item.gameId}`)
              .then(newdata => {
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

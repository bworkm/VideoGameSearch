'use strict';

//vars from Jay Game Cosntructor and Game.all
(function(module){

  function Game(opts){
    Object.keys(opts).forEach(e => this[e] = opts[e]);
  }

  Game.allGames =[];

  Game.loadAll = data => {
    data.forEach(element => {
      Game.allGames.push(element);
    });
  };

  Game.fetchAll = (callback) => { //eslint-disable-line
    $.get('/game/all') // Done path not yet defined.
    .then(
      function(results){
        console.log(results);
        if(results.rows.length) {
          Game.loadAll(results.rows); //eslint-disable-line
          callback();
        } else {
          $.get('/bgg/hot')
          .then(data => {
            JSON.parse(data).forEach(item => {
              let game = new Game(item); //eslint-disable-line
              game.insertRecord();
            })
          })
        }
      }
    )
  };

  Game.prototype.insertRecord = (callback) => { //eslint-disable-line
    $.post('/game/insert', {name: this.name, gameId: this.gameId, rank: this.rank, thumbnail: this.thumbnail})
    .then(data => {
      console.log(data);
      if(callback) callback();
    });
  }

  module.Game = Game;
})(window)

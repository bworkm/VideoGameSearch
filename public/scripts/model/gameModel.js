'use strict';

//vars from Jay Game Cosntructor and Game.all

Game.fetchAll = (callback) => { //eslint-disable-line
  $.ajax('/game/all') // TODO path not yet defined.
  .then(
    function(results){
      if(results.rows.length) {
        Game.loadAll(results.rows); //eslint-disable-line
        callback();
      } else {
        $.get('https://bgg-json.azurewebsites.net/hot')
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

Game.createTable = callback => {

}

Game.prototype.insertRecord = (callback) => { //eslint-disable-line
  $.post('/game/insert', {name: this.name, gameId: this.gameId, rank: this.rank, thumbnail: this.thumbnail})
  .then(data => {
    console.log(data);
    if(callback) callback();
  });
}

(function(module){

  function Game(opts){
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  Game.allGames =[];


})

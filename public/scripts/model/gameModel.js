(function(module){

  function Game(opts){
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

Game.allGames =[];


})

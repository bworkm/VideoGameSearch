(function(module){

  var indexController = {};

//function that will be in gameModel.js
///still working on this function
  indexController.index = function(ctx, next){

    if(ctx.games.length){
      indexView.index(ctx.games);
    } else {
      app.post();
    }
  };

  // indexController.loadById = function(ctx, next) {
  //   var gameData = function(game) {
  //     ctx.games = game;
  //     next();
  //   };
  //   Game.findWhere('id', ctx.params.id, gameData);
  // };

  indexController.loadAll = function(ctx, next) {
    var gameData = function(allGames) {
      ctx.articles = Game.allGames;
      next();
    } else {
      Game.fetchAll(gameData);
    }
  };

  module.indexController = indexController;
})

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
  }


  module.indexController = indexController;
})

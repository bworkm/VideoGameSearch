(function(module){

  var indexController = {};

//function that will be in gameModel.js
///still working on this function
  indexController.init = function(){
    $('#page-lower').show().siblings().hide();
    $('#hero-img').show();
    Game.fetchAll(indexView.initIndexPage);

  };

  module.indexController = indexController;
})(window);

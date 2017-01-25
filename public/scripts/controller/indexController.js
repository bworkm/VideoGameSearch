(function(module){

  var indexController = {};

//function that will be in gameModel.js
///still working on this function
  indexController.init = function(){
    $('#about').hide();
    Game.fetchAll(indexView.initIndexPage);

  };

  module.indexController = indexController;
})(window);

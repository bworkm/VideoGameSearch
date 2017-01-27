'use strict';

(function(module){

  var indexController = {};

  indexController.init = function(){
    $('#page-lower').show().siblings().hide();
    $('#hero-img').show();
    $('#display-all').remove();
    $('#page-lower').append('<button id="display-all" name="submit">Display All</button>');
    Game.fetchAll(indexView.initIndexPage); //eslint-disable-line
  };

  module.indexController = indexController;
})(window);

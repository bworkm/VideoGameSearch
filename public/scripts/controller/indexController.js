'use strict';

(function(module){

  var indexController = {};

//function that will be in gameModel.js
///still working on this function
  indexController.init = function(){
    $('#page-lower').show().siblings().hide();
    $('#hero-img').show();
    $('#display-all').remove();
    $('#page-lower').append('<button id="display-all" name="submit">Display All</button>');
    console.log($('#-page-lower:nth-child(3)'));
    Game.fetchAll(indexView.initIndexPage); //eslint-disable-line
  };

  module.indexController = indexController;
})(window);

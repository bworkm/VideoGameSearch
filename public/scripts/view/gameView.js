'use strict';

(function(module) {
  const gameView = {};
  gameView.displayArticles = () => {
    $('#top-games li').on('click', (e) => {
      console.log($(e.target).parent().parent(),'parent of parent');
      $('#game-info').show().siblings().hide();
      let id = $(e.target).parent().parent().attr('id');
      // $(e.target).parent().parent().removeClass();
      console.log(('#' + id), 'full id');
      $('article#' + id).removeClass('hidden');
    })
  };

  gameView.initIndexPage = () => {
    Game.allGames.forEach(gameItem => {
      $('#game-info').append(gameItem.toHtml('#game-info-template')).hide();
    });
  };

  gameView.initIndexPage();
  gameView.displayArticles();
  module.gameView = gameView;
})(window);

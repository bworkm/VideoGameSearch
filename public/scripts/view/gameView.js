'use strict';

(function(module) {
  const gameView = {};

  gameView.setClickHandler = () => {
    $('#index li').off().on('click', (e) => {
      e.preventDefault();
      let id = $(e.target).parent().parent().attr('id');
      page('/gameView/' + id); //eslint-disable-line
    });
  };

  gameView.initGamePage = (id) => {
    $('#game-info').html('');
    Game.allGames.forEach(gameItem => { //eslint-disable-line
      $('#game-info').append(gameItem.toHtml());
    });
    $('#game-info').show().siblings().hide();

    $('#g' + id).removeClass().addClass('image-container');

  };

  module.gameView = gameView;
})(window);

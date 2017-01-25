'use strict';

(function(module) {
  const gameView = {};

  gameView.initIndexPage = () => {
    $('#game_info').show().siblings().hide();

    Game.allGames.forEach(gameItem => {
      // if (gameItem.game_id === id) {
        $('#game_info').append(gameItem.toHtml('#game-info-template'));
      // }
    });
  };

  module.gameView = gameView;
})(window);

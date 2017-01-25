'use strict';

(function(module) {
  const gameController = {};
  gameController.index = () => {
    Game.fetchAll(gameView.initIndexPage);
  }
  module.gameController = gameController;
})(window);

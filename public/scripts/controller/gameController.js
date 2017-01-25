'use strict';

(function(module) {
  const gameController = {};

  gameController.index = () => {
    Game.fetchAll(gameView.initIndexPage);
  }
  
  gameController.index();
  module.gameController = gameController;
})(window);

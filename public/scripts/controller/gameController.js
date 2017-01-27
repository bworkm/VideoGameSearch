'use strict';

(function(module) {
  const gameController = {};

  gameController.init = (ctx) => {
    let temp = ctx.params.id;
    Game.fetchAll(gameView.initGamePage, temp); //eslint-disable-line
  }

  gameView.setClickHandler(); //eslint-disable-line

  module.gameController = gameController;
})(window);

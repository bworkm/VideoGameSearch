'use strict';

(function(module) {
  const gameController = {};

  gameController.init = (ctx) => {
    console.log('gameController.init invoked');
    console.log(ctx.params.id, 'ctx id in gameController.init');
    let temp = ctx.params.id;
    Game.fetchAll(gameView.initGamePage, temp); //eslint-disable-line
  }

  // gameController.init();
  gameView.setClickHandler(); //eslint-disable-line

  module.gameController = gameController;
})(window);

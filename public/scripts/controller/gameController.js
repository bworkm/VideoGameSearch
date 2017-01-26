'use strict';

(function(module) {
  const gameController = {};

  gameController.init = (ctx) => {
    console.log('gameController.init invoked');
    console.log(ctx.params.id, 'ctx id in gameController.init');
    let temp = ctx.params.id;
    Game.fetchAll(gameView.initGamePage, temp);
  }

  // gameController.init();
  gameView.setClickHandler();

  module.gameController = gameController;
})(window);

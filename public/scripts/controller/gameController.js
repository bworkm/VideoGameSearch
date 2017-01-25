'use strict';

(function(module) {
  const gameController = {};

  gameController.init = () => {
    Game.fetchAll(gameView.initIndexPage);
  }

  gameController.articles = () =>{
    gameView.displayArticles();
  }

  gameController.init();

  module.gameController = gameController;
})(window);

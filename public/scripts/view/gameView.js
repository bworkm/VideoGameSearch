'use strict';

(function(module) {
  const gameView = {};

  // gameView.displayArticles = function(ctx) {
  //   // if (!Game.allGames.length) {
  //   //   console.log('no data in array, populating');
  //     // gameController.init();
  //   // }
  //   console.log('this is displayArticles');
  //     $('#game-info').show().siblings().hide();
  //     $('#hero-img').show();
  //     let temp = $('#g' + ctx.params.id);
  //     console.log(temp, 'temp');
  //     $('#g' + ctx.params.id).removeClass();
  // };

  gameView.setClickHandler = () => {
    $('#index ').on('click', (e) => {
      e.preventDefault();
      let id = $(e.target).parent().parent().attr('id');
      page('/gameView/' + id);
    });
  };

  gameView.initGamePage = (id) => {
    $('#game-info').html('');
    Game.allGames.forEach(gameItem => {
      $('#game-info').append(gameItem.toHtml());
    });
    $('#game-info').show().siblings().hide();
    let temp = $('#g' + id);
    $('#g' + id).removeClass().addClass('image-container');;
  };

  module.gameView = gameView;
})(window);

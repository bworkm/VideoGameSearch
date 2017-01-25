(function(module){

  const indexView ={};

  //function used in indexController to show topGames and hide siblings
  indexView.initIndexPage = () => {
    $('#top-games').show().siblings().hide();

    Game.topGames.


    }

  module.indexView = indexView;

})(window);

// /games/insert

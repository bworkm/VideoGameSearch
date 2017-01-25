(function(module){

  const indexView ={};

  //function used in indexController to show topGames and hide siblings
  indexView.initIndexPage = () => {
    let template = Handlebars.compile($('#top-games-template').html());

    // filter to 5 games

    $('#index').append(Game.allGames.filter(function(e){
      if (e.rank < 6 && e.rank > 0) {
        return true;
      }
    })
    .map(template));
  }

  module.indexView = indexView;

})(window);

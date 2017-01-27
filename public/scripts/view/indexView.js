'use strict';

(function(module){

  const indexView ={};

  indexView.initIndexPage = () => {
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line

    $('#index').html('');
    $('#index').append(Game.allGames.filter(function(e){ //eslint-disable-line
      if (e.rank < 6 && e.rank > 0) {
        return true;
      }
    })
    .sort((a,b) => {return a.rank - b.rank})
    .map(template));
    $('#display-all').off().on('click', displayButton);
    $('#collection-button').off().on('click', handleCollectionButton);
    $('#games-label').text('All Games');
  }

  var displayButton = () => {
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line

    $('#index').append(Game.allGames.filter(function(e){ //eslint-disable-line
      if (e.rank < 0 || e.rank > 13) {
        return true;
      }
    })
    .map(template));
    $('#games-label').text('All Games');
    $('#display-all').hide();
  }

  var sliderMain = function() {
    $('#hero .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 3000
    });

    $('#hero .flexslider .slides > li').css('height', $(window).height());
    $(window).resize(function(){
      $('#hero .flexslider .slides > li').css('height', $(window).height());
    });

  };

  var handleCollectionButton = event => { //eslint-disable-line
    var user = $('#collection-search').val();
    page('/collection/' + user) //eslint-disable-line
  }


  sliderMain();
  module.indexView= indexView;

})(window);

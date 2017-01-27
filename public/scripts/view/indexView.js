'use strict';

(function(module){

  const indexView ={};

  indexView.initIndexPage = () => {
    let template = Handlebars.compile($('#top-games-template').html());

    // filter to 5 games

    $('#index').html('');
    $('#index').append(Game.allGames.filter(function(e){
      if (e.rank < 6 && e.rank > 0) {
        return true;
      }
    })
    .sort((a,b) => {return a.rank - b.rank})
    .map(template));

    $('#display-all').on('click', displayButton);
    $('#collection-button').on('click', handleCollectionButton);
  }

  var displayButton = () => {
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line

    $('#index').append(Game.allGames.filter(function(e){
      if (e.rank < 0 || e.rank > 13) {
        return true;
      }
    })
    .map(template));

    $('#display-all').hide();

    $('#top-games-slider .flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 3000
    });

    $('#top-games-slider .flexslider .slides > li').css('height', $(window).height());
    $(window).resize(function(){
      $('#top-games-slider .flexslider .slides > li').css('height', $(window).height());
    });

  }

  var sliderMain = function() {

	  	$('#hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 3000
	  	});

	  	$('#hero .flexslider .slides > li').css('height', $(window).height());
	  	$(window).resize(function(){
	  		$('#hero .flexslider .slides > li').css('height', $(window).height());
	  	});

	};

  var handleCollectionButton = event => { //eslint-disable-line
    var user = $('#collection-search').val();
    console.log(user);
    $('#collection-button').off();
    page('/collection/' + user) //eslint-disable-line
  }

  sliderMain();
  module.indexView = indexView;

})(window);

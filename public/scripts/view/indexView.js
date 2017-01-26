(function(module){

  const indexView ={};

  indexView.initIndexPage = () => {
    let template = Handlebars.compile($('#top-games-template').html());

    // filter to 5 games

    $('#index').append(Game.allGames.filter(function(e){
      if (e.rank < 6 && e.rank > 0) {
        return true;
      }
    })
    .map(template));

    $('#display-all').on('click', displayButton)
    }

  displayButton = () => {
    let template = Handlebars.compile($('#top-games-template').html());

    $('#index').append(Game.allGames.filter(function(e){
      if (e.rank < 0 || e.rank > 13) {
        return true;
      }
    })
    .map(template));

  }

  //hero image slider code///////////////
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

  sliderMain();
  module.indexView = indexView;

})(window);

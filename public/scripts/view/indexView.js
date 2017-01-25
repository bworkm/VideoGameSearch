(function(module){

  indexView ={};

    //function to render content onto DOM handlbars template
    var render = function(topGames) {
      var template = Handlebars.compile($('#top-games-template').html());

      return template(topGames);
    };

//function used in indexController to show topGames and hide siblings
  indexView.index = function(games) {
    $('#top-games').show().siblings().hide();

  // $('***#allgamesetc***').remove();
    games.forEach(function(a){
      $('#top-games').append(render(a));
    });
  ///hides all but first 5 games
    if ($('#top-games').length > 5){
      $('#page-lower').hide()
    }

  };

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

	// var sliderSayings = function() {
	// 	$('#fh5co-sayings .flexslider').flexslider({
	// 		animation: "slide",
	// 		slideshowSpeed: 3000,
	// 		directionNav: false,
	// 		controlNav: true,
	// 		smoothHeight: true,
	// 		reverse: true
	//   	});
	// }

sliderMain();


  module.indexView= indexView;

})(window);

// /games/insert

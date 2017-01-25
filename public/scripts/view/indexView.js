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

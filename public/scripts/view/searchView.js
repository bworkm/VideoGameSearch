'use strict';

(function(module) {
  const searchView = {}

  searchView.displaySearchResults = (data) => {
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line

    $('.top-games-li').remove();

    $('#index').append(Game.allGames.filter((item) => { //eslint-disable-line
      if (item.name.toLowerCase().indexOf(data.toLowerCase()) >= 0) {
        return true;
      }
    })
    .map(template));
    $('#index').show().siblings().hide();
    $('#games-label').show();

    ($('#index').children().length > 0) ? ($('#games-label').text('Search Results')) : ($('#games-label').text('No Results Found'));
  }
  
  searchView.setButtonHandlers = (callback) => {
    $('#btn-search-ham').on('click', (e) => {
      // e.preventDefault();
      let data = $('#box-search-ham').val();
      console.log(data, ': data search-ham');
      callback(data);
    });
    $('#btn-search-fp').on('click', (e) => {
      // e.preventDefault();
      let data = $('#box-search-fp').val();
      console.log(data, ': data search-fp');
      callback(data);
    })
  }

  searchView.setButtonHandlers(searchView.displaySearchResults);
  module.searchView = searchView;
})(window);

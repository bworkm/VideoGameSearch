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
    $('#btn-search-ham').off().on('click', (e) => { //eslint-disable-line
      let data = $('#box-search-ham').val();
      callback(data);
    });
    $('#btn-search-fp').off().on('click', (e) => { //eslint-disable-line
      let data = $('#box-search-fp').val();
      callback(data);
    })
  }

  searchView.setButtonHandlers(searchView.displaySearchResults);
  module.searchView = searchView;
})(window);

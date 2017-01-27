'use strict';

(function(module){
  const collectionView = {};

  collectionView.initCollectionPage = user => {
    $('#collection').html('');
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line
    $.get(`https://bgg-json.azurewebsites.net/collection/${user}`)
    .then(data => {$('#collection').append(JSON.parse(data).map(template))}) //eslint-disable-line
  }
  module.collectionView = collectionView;
})(window);

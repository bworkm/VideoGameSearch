(function(module){
  const collectionView = {};

  collectionView.initCollectionPage = user => {
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line
    console.log('in collection Page')
    $.get('https://bgg-json.azurewebsites.net/collection/brials')
    .then(data => {$('#collection').append(data.map(template))}) //eslint-disable-line
  }

  module.collectionView = collectionView;
})(window);

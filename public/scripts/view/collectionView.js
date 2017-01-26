(function(module){
  const collectionView = {};

  collectionView.initCollectionPage = data => {
    let template = Handlebars.compile($('#top-games-template').html()); //eslint-disable-line
    $('#collection').append(data.map(template))
  }

  module.collectionView = collectionView;
})(window);

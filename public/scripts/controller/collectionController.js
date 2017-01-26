'use strict';

(function(module) {
  const collectionController = {};
  $('#collection').show().siblings().hide();
  collectionController.init = (ctx) => {
    console.log(ctx.params.user);
    
    $.get('https://bgg-json.azurewebsites.net/collection/brials')
    .then(data => {collectionView.initCollectionPage}) //eslint-disable-line
  }

  // collectionController.init();
  gameView.setClickHandler(); //eslint-disable-line

  module.collectionController = collectionController;
})(window);

'use strict';

(function(module) {
  const collectionController = {};
  collectionController.init = (ctx) => {
    $('#collection').show().siblings().hide();
    var user = ctx.params.user
    collectionView.initCollectionPage(user)
  }

  // collectionController.init();
  gameView.setClickHandler(); //eslint-disable-line

  module.collectionController = collectionController;
})(window);

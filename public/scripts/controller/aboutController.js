'use strict';

(function(module){
  const aboutController = {};

  aboutController.init = () => {
    $('#about').fadeIn().siblings().hide();
  }

  module.aboutController=aboutController;
})(window)

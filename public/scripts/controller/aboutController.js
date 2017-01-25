(function(module){
  const aboutController = {};

  aboutController.init = () => {
    $('.page-lower').hide();
    $('#about').fadeIn();
  }

  module.aboutController=aboutController;
})(window)

(function(module){
  const aboutController = {};

  aboutController.init = () => {
    console.log('aboutController happened');
    $('#about').fadeIn().siblings().hide();
  }

  module.aboutController=aboutController;
})(window)

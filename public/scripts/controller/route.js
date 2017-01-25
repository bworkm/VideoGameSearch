'use strict';

// page('/', indexController.init);
page('/about', aboutController.init);
page('/gameView/:id', gameView.displayArticles);


page();

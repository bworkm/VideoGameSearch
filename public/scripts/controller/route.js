'use strict';

// page('/', indexController.init);
page('/about', aboutController.init);
page('/gameView/:id', gameController.articles);

page();

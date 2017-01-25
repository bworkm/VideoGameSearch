'use strict';


page('/', indexController.index);
page('/gameView/:id', gameController.index);
page('/about', aboutController.init);


page();

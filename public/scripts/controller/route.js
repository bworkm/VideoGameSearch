'use strict';

page('/', indexController.index);
page('/about', aboutController.index);
page('/gameView/:id', gameController.index);


// page();

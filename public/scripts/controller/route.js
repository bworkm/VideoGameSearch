'use strict';

page('/', indexController.init); //eslint-disable-line
page('/about', aboutController.init); //eslint-disable-line
page('/gameView/:id?', gameController.init); //eslint-disable-line
page('/collection/:user', collectionController.init);

page();//eslint-disable-line

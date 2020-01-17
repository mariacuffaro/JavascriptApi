'use strict';
module.exports = function(app) {
  var testController = require('../controllers/testController');
  // hello Route
  app.route('/hello')
    .get(testController.hello)
    .post(testController.hello);

    app.route('/goodbye')
    .get(testController.goodbye)
    .post(testController.goodbye);
};
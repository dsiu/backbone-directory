$(function() {

  var DirectoryApp = require('./directory_app');
  var DirectoryAppHeader = require('./directory_app.header');
  var DirectoryAppRouting = require('./directory_app.routing');

//  DirectoryApp.Routing = DirectoryAppRouting;
//  DirectoryApp.Header = DirectoryAppHeader;

  console.log('app about to start');
  DirectoryApp.start();
  console.log('app started');

});
$(function() {

  var DirectoryApp = require('./directory_app');
  var DirectoryAppRouting = require('./directory_app.routing');

//  DirectoryApp.Routing = DirectoryAppRouting;
//  DirectoryApp.Header = DirectoryAppHeader;

  console.log('app about to start');
  DirectoryApp.start();
  console.log('app started');

});
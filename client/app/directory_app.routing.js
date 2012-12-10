/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 11/20/12
 * Time: 2:15 PM
 * To change this template use File | Settings | File Templates.
 */
var App = require('directory_app');

App.module('Routing', function (Routing, App, Backbone, Marionette, $, _) {

  var Router = Marionette.AppRouter.extend(
    {
      appRoutes : {
        ""              : "home",
        "contact"       : "contact",
        "employees/:id" : "employeeDetails"
      }
    });


  App.addInitializer(function () {
    App.Routing.router = new Router(
      {
        controller : App
      });
    App.vent.trigger('routing:started');
  });

});




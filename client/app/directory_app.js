var DirectoryApp = new Backbone.Marionette.Application();

var HomeView = require('./views/home');
var HeaderView = require('./views/header');
var ContactView = require('./views/contact');
var EmployeeView = require('./views/employee');
var Employee = require('./models/employee');

DirectoryApp.addRegions(
  {
    header : '.header',
    content : '#content'
  }
);

DirectoryApp.vent.on('routing:started', function () {
  console.log('routing:started');
  if (!Backbone.History.started) {
    Backbone.history.start();
  }
});
DirectoryApp.home = function () {
  if (!DirectoryApp.homeView) {
    DirectoryApp.homeView = new HomeView();
  }
  DirectoryApp.content.show(DirectoryApp.homeView);
  DirectoryApp.headerView.select('home-menu');
};

DirectoryApp.contact = function() {
  if (!DirectoryApp.contactView) {
    DirectoryApp.contactView = new ContactView();
  }
  DirectoryApp.content.show(DirectoryApp.contactView);
  DirectoryApp.headerView.select('contact-menu');
};

DirectoryApp.employeeDetails = function (id) {
  console.log('employeeDetails id = ' + id);
  var employee = new Employee({id : id});
  employee.fetch(
    {
      success : function (data) {
        // Note that we could also 'recycle' the same instance of EmployeeFullView
        // instead of creating new instances
        $('#content').html(new EmployeeView({model : data}).render().el);
      },
      error : function(err) {
        console.log(err);
      }
    });
};


DirectoryApp.addInitializer(function() {
  // render the header
  DirectoryApp.headerView = new HeaderView();
  DirectoryApp.header.show(DirectoryApp.headerView);
  DirectoryApp.headerView.select('home-menu');

  // Close the search dropdown on click anywhere in the UI
  $('body').click(function () {
    $('.dropdown').removeClass("open");
  });
});

module.exports = DirectoryApp;
var __ = require('underscore');

load('application');
load('employees');

before(use('loadEmployee'), {only: ['show', 'edit', 'update', 'destroy']});

action(function index() {
  var that = this;
  Employee.all(function (err, employees) {

    var luckyEmployee = __.filter(employees, function(e) { return Math.random() > 0.5; });
    if ( req.accepts('json') ) {
      send(luckyEmployee);
    }
    else { // html and other
      console.log('is html');
      that.title = 'Employee index';
      render({
               employees : luckyEmployee
             });
    }
  });
});

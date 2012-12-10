
var Employee = Backbone.Model.extend(
  {
    urlRoot: '/employees',

    initialize : function() {
      // this.reports = new EmployeeCollection();
    }
  });

module.exports = Employee;
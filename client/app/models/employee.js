
var Employee = exports.Employee = Backbone.Model.extend(
  {
    urlRoot: '/employees'

//    initialize : function() {
//      var EmployeeReportCollection = require('./employee').EmployeeReportCollection;
//      this.reports = new exports.EmployeeReportCollection({employee: this});
//    }
  });

// Employee Collection Class
var EmployeeCollection = exports.EmployeeCollection = Backbone.Collection.extend(
  {
    url : '/employees',

    model: exports.Employee,

    findByName : function (key) {
      //        var url = (key == '') ? '/employees' : "/employees/search/" + key;
      var url = '/employees';

      console.log('findByName:');
      console.log(key);
      console.log(this);
      var _self = this;
      $.ajax(
        {
          url      : url,
          dataType : "json",
          success  : function (data) {
            console.log("search success: " + data.length);
            console.log(_self.model);
            _self.reset(data);
          },
          error    : function (err) {
            console.log(err);
          }
        });
    }
  }
);

var EmployeeReportCollection = exports.EmployeeReportCollection = exports.EmployeeCollection.extend(
  {
    url : function()  {
      // return '/employees/' + this.employee.id + '/reports';
      return '/employees';
    },

    initialize : function(options) {
      this.employee = options.employee || {};
    }
  });

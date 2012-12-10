
var Employee = require('./employee');


// Employee Collection Class
var EmployeeCollection = Backbone.Collection.extend(
  {
    url : '/employees',

    model: Employee,

    findByName:function (key) {
      //        var url = (key == '') ? '/employees' : "/employees/search/" + key;
      var url = '/employees';

      console.log('findByName:');
      console.log(key);
      var self = this;
      $.ajax({
               url      : url,
               dataType : "json",
               success  : function (data) {
                 console.log("search success: " + data.length);
                 self.reset(data);
               },
               error    : function (err) {
                 console.log(err);
               }
             });
    }

  });

module.exports = EmployeeCollection;
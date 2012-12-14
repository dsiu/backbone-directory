/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 12/7/12
 * Time: 6:48 PM
 * To change this template use File | Settings | File Templates.
 */
var employeeSummaryViewTmpl = require('./templates/employee-summary-view-template');
var employeeViewTmpl = require('./templates/employee-view-template');
var EmployeeListView = require('./employee-list');
var EmployeeReportCollection = require('../models/employee').EmployeeReportCollection;

var EmployeeView = Backbone.Marionette.ItemView.extend(
  {
    tagName : 'div',
    template : employeeViewTmpl,

    onRender: function() {
      $('#details', this.el).html(new EmployeeSummaryView({model : this.model}).render().el);

      var reports = new EmployeeReportCollection({employee : this.model});

      var that = this;
      reports.fetch(
        {
          success : function (data) {
            console.log(data);
            if (data.length == 0) {
              console.log('no reports');
              $('.no-reports').show();
            } else {
              console.log('has reports');
              var el = new EmployeeListView({collection : reports}).render().el;
              $('#reports', that.el).append(el);
            }
          },
          error : function(err) {
            console.log(err);
          }
        });
    }
  });

var EmployeeSummaryView = Backbone.Marionette.ItemView.extend(
  {
    tagName : 'div',
    template : employeeSummaryViewTmpl
  });

module.exports = EmployeeView;
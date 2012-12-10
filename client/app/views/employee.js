/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 12/7/12
 * Time: 6:48 PM
 * To change this template use File | Settings | File Templates.
 */
var employeeSummaryViewTmpl = require('./templates/employee-summary-view-template');
var employeeViewTmpl = require('./templates/employee-view-template');

var EmployeeView = Backbone.Marionette.ItemView.extend(
  {
    tagName : 'div',
    template : employeeViewTmpl,

    onRender: function(){
      $('#details', this.el).html(new EmployeeSummaryView({model:this.model}).render().el);
     }
  });

var EmployeeSummaryView = Backbone.Marionette.ItemView.extend(
  {
    tagName : 'div',
    template : employeeSummaryViewTmpl
  });

module.exports = EmployeeView;
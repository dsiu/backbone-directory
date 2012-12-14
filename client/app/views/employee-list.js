/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 12/5/12
 * Time: 5:19 PM
 * To change this template use File | Settings | File Templates.
 */
var employeeListItemViewTmpl = require('./templates/employee-list-item-template');

var EmployeeListItemView = Backbone.Marionette.ItemView.extend(
  {
    template : employeeListItemViewTmpl,
    tagName : 'li'
  });

var EmployeeListView = Backbone.Marionette.CollectionView.extend(
  {
    itemView : EmployeeListItemView,
    tagName : 'ul',
    className : 'nav nav-list'
//    initialize : function() {
//      console.log('EmployeeListView init');
//    }
  });

module.exports = EmployeeListView;
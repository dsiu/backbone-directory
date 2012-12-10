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
    tagName : 'li',
    render:function () {
      console.log('EmployeeListItemView render');

      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });

var EmployeeListView = Backbone.Marionette.CollectionView.extend(
  {
    itemView : EmployeeListItemView,
    tagName : 'ul',
    className : 'nav nav-list',
    initialize : function() {
      console.log('EmployeeListView init');
    },
    onItemAdded: function(itemView){
       console.log('item added', itemView);
      }
  });

module.exports = EmployeeListView;
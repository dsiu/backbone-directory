/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 12/3/12
 * Time: 7:18 PM
 * To change this template use File | Settings | File Templates.
 */


var headerViewTmpl = require('./templates/header-view-template');
var EmployeeCollection = require('../models/employee').EmployeeCollection;

var EmployeeListView = require('./employee-list');

var HeaderView = Backbone.Marionette.ItemView.extend(
  {

    template: headerViewTmpl,

    initialize:function () {
      console.log('Initializing Header View');
      this.searchResults = new EmployeeCollection();
      this.searchresultsView = new EmployeeListView({collection: this.searchResults, className: 'dropdown-menu'});
    },

    render: function () {
      console.log('header render');
      $(this.el).html(this.template);
      $('.navbar-search', this.el).append(this.searchresultsView.render().el);
      return this;
    },

    events: {
      "keyup .search-query": "search",
      "keypress .search-query": "onkeypress"
    },

    search: function () {
      var key = $('#searchText').val();
      console.log('search ' + key);
      this.searchResults.findByName(key);
      setTimeout(function () {
        $('.dropdown').addClass('open');
      });
    },

    onkeypress: function (event) {
      if (event.keyCode == 13) {
        event.preventDefault();
      }
    },

    select: function(menuItem) {
      $('.nav li').removeClass('active');
      $('.' + menuItem).addClass('active');
    }
  });

module.exports = HeaderView;
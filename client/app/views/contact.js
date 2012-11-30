/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 11/30/12
 * Time: 6:26 PM
 * To change this template use File | Settings | File Templates.
 */

var contactViewTmpl = require('./templates/contact-view-template');

var ContactView = Backbone.Marionette.ItemView.extend(
  {

    template: contactViewTmpl,

    initialize:function () {
      console.log('Initializing Contact View');
    },
  });

module.exports = ContactView;
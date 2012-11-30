/**
 * Created with IntelliJ IDEA.
 * User: dsiu
 * Date: 11/30/12
 * Time: 6:26 PM
 * To change this template use File | Settings | File Templates.
 */

var homeViewTmpl = require('./templates/home-view-template');

var HomeView = Backbone.Marionette.ItemView.extend(
  {

    template: homeViewTmpl,

    initialize:function () {
      console.log('Initializing Home View');
      //        this.template = _.template(directory.utils.templateLoader.get('home'));
      //        this.template = templates['Home'];
    },

    events:{
      "click #showMeBtn":"showMeBtnClick"
    },

//    render:function () {
//      $(this.el).html(this.template());
//      return this;
//    },

    showMeBtnClick:function () {
//      app.headerView.search();
      console.log('showMeBtnClick');
    }

  });

module.exports = HomeView;
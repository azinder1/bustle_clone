import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('.hamburger').click(function(){
      Ember.$(".hidden").show();
    });
    Ember.$('.close').click(function() {
      Ember.$('.hidden').hide();
    })
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
});

ember.$(document).ready(function(){
  ember.$('.carousel').carousel();
});

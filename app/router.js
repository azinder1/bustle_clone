import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('article', {path: '/article/:post_id'});
  this.route('edit', {path: '/edit/:post_id'});
  // this.route('articles', {path: '/articles/:category'});
  this.route('admin');
  this.route('add');
});

export default Router;

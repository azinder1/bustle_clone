import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },
    editPost(post, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('edit')
    }
  }
});

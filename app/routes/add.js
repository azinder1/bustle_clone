import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        category: this.get('category')
      };
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin')
    }
  }
});

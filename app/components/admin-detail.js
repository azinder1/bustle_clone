import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    delete(post) {
      if(confirm('Are you sure that you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    showEditForm() {
      this.set('showEditForm', true);
    },
    edit(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
        category: this.get('category')
      };
      this.set('showEditForm', false);
      this.sendAction('edit', post, params);
    }
  }
});

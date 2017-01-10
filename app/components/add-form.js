import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      debugger;
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.sendAction('savePost2', params);
    }
  }
});

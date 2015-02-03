import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    newPost: function(){
      var title = this.get('titleCopy');
      var body = this.get('bodyCopy');

      var post = this.store.createRecord('post', { title: title, body: body });
      this.set('titleCopy', '');
      this.set('bodyCopy', '');
      post.save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }

});

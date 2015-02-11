import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    newPost: function(){
      var title = this.get('titleCopy');
      var body = this.get('bodyCopy');

      if ((title == null) || (body == null)) {
        this.flashMessage({
          content: 'You cannot have an empty title or body.',
          duration: 1000,
          type: 'fail',
        });
      } else {
        var post = this.store.createRecord('post', { title: title, body: body });
        this.set('titleCopy', '');
        this.set('bodyCopy', '');
        post.save().then(function(){
          this.transitionToRoute('posts');
          this.flashMessage({
            content: 'Your post was saved!',
            duration: 1000,
            type: 'success',
          });
        }.bind(this));
      }
      }

  }

});

import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    deletePost: function(post){
      post.deleteRecord();
      post.save().then(function() {
        this.transitionToRoute('posts');
        this.flashMessage({
          content: 'Your post was deleted!',
          duration: 1000,
          type: 'success',
        });
      }.bind(this));
    }

  }
});

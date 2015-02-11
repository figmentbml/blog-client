import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    savePost: function(post){
      var title = this.get('title');
      post.set('title', title);
      post.save().then(function(){
        this.transitionToRoute('posts');
        this.flashMessage({
          content: 'Your post was successfully updated!',
          duration: 1000,
          type: 'success',
        });
      }.bind(this));
    }
  }

});

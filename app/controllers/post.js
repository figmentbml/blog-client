import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    deletePost: function(post){
      post.deleteRecord();
      post.save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }
});

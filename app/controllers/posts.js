import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    deletePost: function(post){
      post.deleteRecord();
      post.save().then(function(){
        this.transitionToRoute('posts');
        this.flashMessage('success', 'Your post has been deleted!');
      }.bind(this));
    },

    queryPost: function() {
      var query = this.get('search');
      this.transitionToRoute('posts.search', {queryParams: {term: query}});
    },
  }
});

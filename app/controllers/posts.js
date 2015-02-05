import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    deletePost: function(post){
      post.deleteRecord();
      post.save();
    },

    queryPost: function() {
      var query = this.get('search');
      this.transitionToRoute('posts.search', {queryParams: {term: query}});
    },
  }
});

import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    deletePost: function(post){
      post.deleteRecord();
      post.save();
    }
  }
});

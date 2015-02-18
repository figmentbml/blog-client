import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {

    newComment: function(){
      var controller = this;
      var body = this.get('bodyCopy');
      //var user = this.get('user.id');
      this.store.find('post', this.get('id')).then(function(post){
        var comment = this.store.createRecord('comment', {
          body: body,
          //user: user,
          post: post
        });
        comment.save().then(function(){
          controller.transitionToRoute('post');
        });
      }.bind(this));

    this.set('bodyCopy', '');

    }
  }

});

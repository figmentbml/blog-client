import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {

    newComment: function(){
      var controller = this;
      var body = this.get('bodyCopy');
      controller.store.find('post', controller.get('id')).then(function(post){
        controller.store.find('user', controller.get('userCopy')).then(function(user){
          var comment = controller.store.createRecord('comment', {
            body: body,
            user: user,
            post: post
          });
          comment.save().then(function(){
            controller.transitionToRoute('post');
            controller.flashMessage({
              content: 'Your comment was saved!',
              duration: 1000,
              type: 'success',
            });
          });
        });
      });
    controller.set('bodyCopy', '');
    }
  }

});

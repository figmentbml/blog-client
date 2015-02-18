import Ember from "ember";

export default Ember.ArrayController.extend({

  currentUser: {
    id: 1
  },

  actions: {
    newPost: function(){
      var controller = this;
      var title = this.get('titleCopy');
      var body = this.get('bodyCopy');

      if ((title == null) || (body == null)) {
        controller.flashMessage({
          content: 'You cannot have an empty title or body.',
          duration: 1000,
          type: 'fail',
        });
      } else {
        controller.store.find('user', this.get('userCopy')).then(function(user){
          var post = controller.store.createRecord('post', { title: title, body: body, user: user });
          controller.set('titleCopy', '');
          controller.set('bodyCopy', '');
          post.save().then(function(){
            controller.transitionToRoute('posts');
            controller.flashMessage({
              content: 'Your post was saved!',
              duration: 1000,
              type: 'success',
            });
          });

        });


      }
      }

  }

});

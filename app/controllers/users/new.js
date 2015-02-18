import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    newUser: function(){
      var name = this.get('firstCopy');

      if (name == null) {
        this.flashMessage({
          content: 'You must have a name!',
          duration: 1000,
          type: 'fail',
        });
      } else {
        var user = this.store.createRecord('user', { firstName: name });
        this.set('firstCopy', '');
        user.save().then(function(){
          this.transitionToRoute('users');
          this.flashMessage({
            content: 'Your user was saved!',
            duration: 1000,
            type: 'success',
          });
        }.bind(this));
      }
    }
  }
});

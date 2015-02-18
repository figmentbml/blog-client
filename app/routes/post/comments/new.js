import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('users', this.store.find('user'));
  }
});

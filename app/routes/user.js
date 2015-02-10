import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    model.reload().then(function () {
      controller.set('model', model);
    });
  },

  model: function(params) {
    return this.store.find('user', params.user_id);
  }
});

import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    if(params.term) {
      return this.store.find('post', {find: params.term});
    } else {
      return [];
    }
  }

});

import Ember from "ember";

export default Ember.ArrayController.extend({

  queryParams: ['term'],
  term: null,

  results: function () {
    return this.store.find('post', {find: this.get('term')});
  }.property('term')

});

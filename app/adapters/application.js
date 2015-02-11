import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  host: 'http://jaswa-blog-api.herokuapp.com/'
});

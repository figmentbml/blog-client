import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("posts", function(){
    this.route('search');
    this.route('new', { path: 'new'});
    this.resource('post', { path: '/:post_id'}, function() {
      this.route('edit', { path: '/edit'});
      this.route('comments', function (){
        this.route('new', { path: '/new'});
      });
    });
  });
  this.route("users", function() {
    this.resource('user', { path: '/:user_id'});
  });
});

export default Router;

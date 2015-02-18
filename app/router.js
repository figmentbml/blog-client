import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("posts", {path: '/'}, function(){
    this.route('search');
    this.route('new', { path: 'new'});
    this.resource('post', { path: '/posts/:post_id'}, function() {
      this.route('edit', { path: '/posts/edit'});
      this.route('comments', function (){
        this.route('new', { path: '/new'});
        this.route('edit', { path: '/edit'});
      });
    });
  });
  this.route("users", function() {
    this.resource('user', { path: '/:user_id'});
    this.route('new', { path: '/new'});
  });
});

export default Router;

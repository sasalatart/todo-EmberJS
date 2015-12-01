import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', { path: '/'}, function() {
    this.route('new-list');
    this.route('list', { path: 'lists/:list_id' }, function() {
      this.route('new-category');
      this.route('category', { path: 'categories/:category_id' });
    });
  });
});

export default Router;

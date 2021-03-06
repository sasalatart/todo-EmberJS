import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('lists/list');
  },

  renderTemplate: function() {
    this.render({ outlet: 'new-category' });
  }
});

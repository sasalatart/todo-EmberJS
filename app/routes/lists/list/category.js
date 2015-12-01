import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.category_id);
  },

  renderTemplate: function() {
    this.render({ outlet: 'category' });
  },
});

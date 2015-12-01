import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  completedHidden: DS.attr('boolean', { defaultValue: false }),
  completed: DS.attr('boolean', { defaultValue: false }),
  category: DS.belongsTo('category'),

  show: Ember.computed('completedHidden', 'completed', function() {
      return !this.get('completed') || !this.get('completedHidden');
  }),

  toggleCompleted: Ember.computed('completed', function() {
    if (this.get('completed')) {
      this.set('completed', false);
    } else {
      this.set('completed', true);
    }
  })
});

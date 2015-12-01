import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createCategory() {
      this.store.createRecord('category', {
        name: this.get('name'),
        list: this.model
      }).save();

      this.set('name', '');
      this.transitionToRoute('/lists/' + this.get('model').id);
    }
  }
});

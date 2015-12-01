import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createList() {
      this.store.createRecord('list', {
        name: this.get('name')
      }).save();

      this.set('name', '');
      this.transitionToRoute('lists');
    }
  }
});

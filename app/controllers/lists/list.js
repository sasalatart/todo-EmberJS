import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cloneList(list) {
      var name = list.get('name') + '-template';
      var store = this.store;

      store.createRecord('list', {
        name: name,
      }).save().then(function(newList) {
        list.get('categories').forEach(function(category) {
          store.createRecord('category', {
            name: category.get('name'),
            list: newList
          }).save();
        });
      });

      this.transitionToRoute('lists');
    },

    deleteList(list) {
      this.store.findRecord('list', list.get('id')).then((l) => {
        l.destroyRecord();
      });

      this.transitionToRoute('lists');
    },

    deleteCategory(category) {
      this.store.findRecord('category', category.get('id')).then((c) => {
        c.destroyRecord();
      });

      this.transitionToRoute('/lists/' + this.get('model').id);
    }
  }
});

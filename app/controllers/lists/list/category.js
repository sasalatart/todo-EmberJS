import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo() {
      this.store.createRecord('todo', {
        name: this.get('name'),
        category: this.model
      }).save();

      this.set('name', '');
    },

    deleteTodo(todo) {
      this.store.findRecord('todo', todo.get('id')).then((t) => {
        t.destroyRecord();
      });
    },

    toggleTodo(todo) {
      if (todo.get('completed')) {
        todo.set('completed', false);
      } else {
        todo.set('completed', true);
      }
    },

    toggleCompletedHidden() {
      this.model.get('todos').forEach(function(todo) {
        if (todo.get('completedHidden')) {
          todo.set('completedHidden', false);
        } else {
          todo.set('completedHidden', true);
        }
      });
    }
  }
});

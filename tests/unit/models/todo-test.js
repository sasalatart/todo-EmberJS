import { moduleForModel, test } from 'ember-qunit';

moduleForModel('todo', 'Unit | Model | todo', {
  // Specify the other units that are required for this test.
  needs: ['model:category']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

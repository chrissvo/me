import { moduleForModel, test } from 'ember-qunit';

moduleForModel('extracurricular-activity', 'Unit | Model | extracurricular activity', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

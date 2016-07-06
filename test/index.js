
var test = require('tape');
var lookup = require('./lookup');

test('Create normal lookup', function (t) {
  t.plan(1);

  var data = [
    { _id: 1, name: 'A' },
    { _id: 2, name: 'B' },
    { _id: 3, name: 'C' }
  ];

  var dataLookup = lookup(data, '_id');

  t.deepEqual(dataLookup, {
    1: { _id: 1, name: 'A' },
    2: { _id: 2, name: 'B' },
    3: { _id: 3, name: 'C' }
  });
});

test('Create reverse lookup', function (t) {
  t.plan(1);

  var data = [
    { _id: 1, name: 'A' },
    { _id: 2, parent: 1, name: 'B' },
    { _id: 3, parent: 2, name: 'C' }
  ];

  var dataParentLookup = lookup(data, 'parent', true);

  t.deepEqual(dataParentLookup, {
    undefined: [ { _id: 1, name: 'A' }],
    1: [ { _id: 2, parent: 1, name: 'B' }],
    2: [ { _id: 3, parent: 2, name: 'C' }]
  });
});

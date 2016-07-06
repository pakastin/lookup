# lookup
create lookup tables easily

## install
```
npm install @pakastin/lookup
```

## usage
```js
import lookup from '@pakastin/lookup';

var users = [ { _id: 1, level: 1, name: 'A' }, { _id: 2, level: 1, name: 'B' }, { _id: 3, name: 'C' } ];

var userLookup = lookup(users, '_id');
var userLevelLookup = lookup(users, 'level', true); // reverse lookup

console.log(userLookup[1]) // --> { _id: 1, name: 'A' }
console.log(userLevelLookup[1]) // --> [ {_id: 1, level: 1, name: 'A' }, { _id: 2, level: 1, name: 'B' } ]
```

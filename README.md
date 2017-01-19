# lookup
create lookup tables easily

## install
```
npm install @pakastin/lookup
```

- production (UMD): https://pakastin.github.io/lookup/lookup.min.js
- ES2015 module: https://pakastin.github.io/lookup/lookup.es.js
- development (UMD): https://pakastin.github.io/lookup/lookup.js

## lookup(items, key, [reverse])
- items(Array): items to iterate
- key(String): which key value to use for lookup
- reverse(Boolean): is there multiple items / key value?

## usage (ES2015 module)

```js
import lookup from '@pakastin/lookup';

const users = [ { _id: 1, level: 1, name: 'A' }, { _id: 2, level: 1, name: 'B' }, { _id: 3, name: 'C' } ];

const userLookup = lookup(users, '_id');
const userLevelLookup = lookup(users, 'level', true); // reverse lookup

console.log(userLookup[1]) // --> { _id: 1, name: 'A' }
console.log(userLevelLookup[1]) // --> [ {_id: 1, level: 1, name: 'A' }, { _id: 2, level: 1, name: 'B' } ]
```

## with commonjs:

```js
const lookup = require('@pakastin/lookup');
...
```

## oldskool:
```html
<script src="https://pakastin.github.io/lookup/lookup.min.js"></script>
<script>
...
const userLookup = lookup(users, '_id');
...
</script>
```

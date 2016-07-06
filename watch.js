
var watch = require('@pakastin/watch');

watch('index.js', 'npm run build', true);
watch('dist/lookup.js', 'npm run uglify');
watch('test/index.js', 'npm run test');

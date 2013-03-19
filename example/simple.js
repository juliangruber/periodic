var repeated = require('..');

var ticks = 0;

repeated(1000).on('tick', function () {
  console.log('tick');
  if (++ticks == 3) this.end();
});

var test = require('tape');
var repeated = require('..');

test('repeated', function (t) {
  var ticks = 0;
  repeated(0).on('tick', function () {
    if (++ticks == 3) {
      this.end();
      t.end();
    }
  })
});

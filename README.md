
# repeated

Reliable intervals.

[![Build Status](https://travis-ci.org/juliangruber/repeated.png)](https://travis-ci.org/juliangruber/repeated)

[![browser support](https://ci.testling.com/juliangruber/repeated.png)](https://ci.testling.com/juliangruber/repeated)

## Usage

```js
var repeat = require('repeated');

var ticks = 0;

repeat(1000)
  .on('tick', function () {
    console.log('tick');
    if (++ticks == 10) this.end();
  })
```

## API

### repeat(interval)

Return a new repeater that emits `tick` events every `interval` milliseconds.

`repeated` tries to stay in time even when the event loop is busy.

### repeat#end()

Stop repeating.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install repeated
```

## License

(MIT)


# periodic

Reliable periodic events.

[![Build Status](https://travis-ci.org/juliangruber/periodic.png)](https://travis-ci.org/juliangruber/periodic)

[![browser support](https://ci.testling.com/juliangruber/periodic.png)](https://ci.testling.com/juliangruber/periodic)

## Usage

```js
var periodic = require('periodic');

var ticks = 0;

periodic(1000)
  .on('tick', function () {
    console.log('tick');
    if (++ticks == 10) this.end();
  })
```

## API

### periodic(interval)

Return a new `periodic` that emits `tick` events every `interval` milliseconds.

`periodic` tries to stay in time even when the event loop is busy.

### periodic#end()

Stop emitting.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install periodic
```

## Alternatives

[every](https://github.com/chrisdickinson/every) by chrisdickinson has a nicer name but the
overall interface and implementation are too complex for my needs.

## License

(MIT)

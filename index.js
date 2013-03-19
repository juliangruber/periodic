var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

module.exports = repeated;

function repeated (interval) {
  if (!(this instanceof repeated)) return new repeated(interval);
  EventEmitter.call(this);

  this.interval = interval;
  this.ended = false;
  this.timeout;

  var self = this;
  setTimeout(function () {
    self.repeat();
  });
}

inherits(repeated, EventEmitter);

repeated.prototype.repeat = function () {
  if (this.ended) return;

  var start = +new Date();
  var tick = 0;

  var dt = (start + this.interval * ++tick) - +new Date();
  if (dt < 0) dt = 0;

  var self = this;
  self.timeout = setTimeout(function () {
    self.repeat();
  }, dt);

  this.emit('tick');
}

repeated.prototype.end = function () {
  this.ended = true;
  if (this.timeout) clearTimeout(this.timeout);
}
